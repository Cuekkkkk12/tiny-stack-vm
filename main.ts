import{readFileSync as f,readdirSync as e,mkdirSync as h,writeFileSync as w}from"node:fs";
let E=process.env,I=E.MAKEFUN_INPUT_DIR||"/input",O=E.MAKEFUN_OUTPUT_DIR||"/output";
for(let d of e(I)){let a=I+"/"+d,b=O+"/"+d,p=f(a+"/program.bin"),i=f(a+"/input.bin");
let A=new Int32Array(576),s=0,c=0,o=Buffer.alloc(65536),l=0,q=0,pc=0,t=0,y=0,z,g;
let F=c=>{throw c},u=(a,b)=>s<a?F(2):s-a+b>256&&F(3),R=()=>{for(;;){
t++==1e6&&F(10),pc>>>0>=p.length&&F(9);
let k=p[pc],m=k==1?1:k==2?4:k>47&k<52?2:0;
pc+m>=p.length&&F(9),pc+=1+m;
if(k<8){if(k<1)F(0);else if(k<2)u(0,1),A[s++]=p[pc-1]<<24>>24;else if(k<3)u(0,1),A[s++]=p.readInt32LE(pc-4);else if(k<4)u(1,0),s--;else if(k<5)u(1,2),A[s]=A[s-1],s++;else if(k<6)u(2,2),z=A[s-1],A[s-1]=A[s-2],A[s-2]=z;else if(k<7)u(2,3),A[s]=A[s-2],s++;else u(3,3),z=A[s-3],A[s-3]=A[s-2],A[s-2]=A[s-1],A[s-1]=z;
}else if(k>15&k<35&k!=31){
if(k==23|k==27)u(1,1),A[s-1]=k==23?-A[s-1]:~A[s-1];
else{u(2,1);let a=A[s-2],b=A[s-1],A2=a>>>0,B=b>>>0,S=b&31;k>18&k<23&!b&&F(4);A[--s-1]=k<17?a+b:k<18?a-b:k<19?Math.imul(a,b):k<20?a/b:k<21?a%b:k<22?A2/B:k<23?A2%B:k<25?a&b:k<26?a|b:k<27?a^b:k<29?a<<S:k<30?a>>S:k<31?a>>>S:k<33?+(a==b):k<34?+(a<b):+(A2<B);}
}else if(k>47&k<53){let r=k>50?0:p.readInt16LE(pc-2);if(k<49)pc+=r;else if(k>51)!c&&F(8),pc=A[256+--c];else if(k>50)c==64&&F(7),A[256+c++]=pc,pc=p[pc-2]|p[pc-1]<<8;else u(1,0),z=A[--s],(k<50?z==0:z)&&(pc+=r);
}else if(k==64|k==65){if(k<65)u(1,1),z=A[s-1],z>>>0>255&&F(6),A[s-1]=A[320+z];else u(2,0),z=A[s-1],z>>>0>255&&F(6),A[320+z]=A[s-=2];
}else if(k>79&k<84){
if(k==82)u(0,1),A[s++]=q<i.length?i[q++]:-1;
else{u(1,0);if(k<81)g=""+A[--s],l+g.length>65536&&F(11),o.write(g,l),l+=g.length;else if(k<82)l>65535&&F(11),o[l++]=A[--s]&255;else F(A[--s]&255);}
}else F(5);
}};
try{R()}catch(x){y=x}
h(b,{recursive:true});w(b+"/stdout.bin",o.slice(0,l));w(b+"/exit.txt",y+"\n");}
