import{readFileSync as f,readdirSync as e,mkdirSync as h,writeFileSync as w}from"node:fs";
let{MAKEFUN_INPUT_DIR:I="/input",MAKEFUN_OUTPUT_DIR:O="/output"}=process.env;
for(let d of e(I)){let a=I+"/"+d,b=O+"/"+d,p=f(a+"/program.bin"),i=f(a+"/input.bin");
let A=new Int32Array(576),s=0,c=0,o="",q=0,pc=0,t=1e6,y=0,z,g,k,r,j;
let F=x=>{throw x},u=(a,b)=>s<a?F(2):s-a+b>256&&F(3);
try{for(;;){
--t<0&&F(10),k=p[pc],k==null&&F(9),pc+=k==2?5:k==1?2:k>47&k<52?3:1,pc>p.length&&F(9);
if(k<8){if(!k)F(0);else if(k<3)u(0,1),A[s++]=k<2?p[pc-1]<<24>>24:p.readInt32LE(pc-4);else if(k<4)u(1,0),s--;else{u((k-1)>>1,k>>1);if(k<5)A[s++]=A[s-2];else if(k<6)[A[s-1],A[s-2]]=[A[s-2],A[s-1]];else if(k<7)A[s++]=A[s-3];else[A[s-3],A[s-2],A[s-1]]=[A[s-2],A[s-1],A[s-3]];}
}else if(k>15&k<35&k!=31){
if(k==23|k==27)u(1,1),A[s-1]=k<24?-A[s-1]:~A[s-1];
else{u(2,1);let a=A[s-2],b=A[s-1],A2=a>>>0,B=b>>>0,S=b&31;k>18&k<23&!b&&F(4);A[--s-1]=[a+b,a-b,Math.imul(a,b),a/b,a%b,A2/B,A2%B,,a&b,a|b,a^b,,a<<S,a>>S,a>>>S,,+(a==b),+(a<b),+(A2<B)][k-16];}
}else if(k>47&k<53){if(k>51)!c&&F(8),pc=A[256+--c];else if(r=p.readInt16LE(pc-2),k<49)pc+=r;else if(k>50)c==64&&F(7),A[256+c++]=pc,pc=r&65535;else u(1,0),z=A[--s],!z==(k<50)&&(pc+=r);
}else if(k>63&k<66){u(1+(j=k>64),1-j),z=A[s-1],z&~255&&F(6),A[j?320+z:s-1]=j?A[s-=2]:A[320+z];
}else if(k>79&k<84){
if(k==82)u(0,1),A[s++]=i[q++]??-1;
else{u(1,0);if(k<81)g=""+A[--s],o.length+g.length>65536&&F(11),o+=g;else if(k<82)o.length>>16&&F(11),o+=String.fromCharCode(A[--s]&255);else F(A[--s]&255);}
}else F(5);
}}catch(x){y=x}
h(b,{recursive:!0});w(b+"/stdout.bin",o,"latin1");w(b+"/exit.txt",y+"");}
