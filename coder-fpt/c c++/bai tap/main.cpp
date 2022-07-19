#include <iostream>
#include <stdio.h>
#include<conio.h>
#include<math.h>
void bai__1tongcacsonguyen(){
	int i,n,tong=0;
	scanf("%d",&n);
	for (i=1;i<=n;i++ ){
		tong = tong + i;
			printf(" %d \n",tong);
	}

}
void bai__2__tongmu(){
	int i,n,tong=0,x;
	scanf("%d",&n);
	for(i=0;i<=n;i++){
		tong+= i*i;
	}
	printf("%d",tong);
}
void bai__3__tongphan(){
	double i,n,tong=0;
	scanf("%lf",&n);
	for(i=1;i<=n;i++){
		tong+= 1 / i;
		printf("%lf\n",tong);
	}
}
void bai__4__sPhanChiaHetCho2(){
	float i,n,tong;
	scanf("%f",&n);
	for(i=2;i<=n;i+=2){
		tong=1/i;
		printf("%f\n",tong);
	}
}
void bai__5__tongPhan2nCong1(){
	float i,n,tong;
	scanf("%f",&n);
	for(i=1;i<=n;i++){
		tong+=1/ (2*i+1);
		printf("1/ %f %f\n",i,tong);
	}	
}
void bai__6__tongPhanCong1(){
	float n,i,tong;
	scanf("%f",&n);
	for(i=1;i<=n;i++){
		tong+= 1/i*(i+1);
	}
	printf("%f",tong);
}
void bai7(){
	float n,i,tong;
	scanf("%f",&n);
	for(i=1;i<=n;i++){
		tong+= i/(i+1);
		printf("%f\n",tong);
	}
}
void bai8(){
	float i,n,tong;
	scanf("%f",&n);
	for(i=1;i<=n;i++){
		tong+= (2*i+1)/(2*i+2);
		printf("%f ",tong);
	}
}
void bai9(){
	int i,x;
	int tong=1;
		scanf("%d",&x);
		for(i=1;i<=x;i++){
			tong = tong * i;
			printf("%d\n",tong);
		}
}
void bai10(){
int i,n,x,tong=0;
scanf("%d",&n);
scanf("%d",&x);
for ( i=1;i<=n;i++){
	tong+=n*x;
}
	printf("%d\n",tong);
}
void bai11(){
	int i,n,tong,s=1;
	tong=0;
	scanf("%d",&n);
	for ( i=1;i<=n;i++){
		s*= i;
	 tong+= s;
	}
	printf("%d",tong);
}
void bai12(){
	int t=1,i,n=0,s,tong=1;
	printf("nhap gia tri \n");
	scanf("%d",&s);
	printf(" nhap so mu \n ");
	scanf("%d",&n);
	for(i=1;i<=n;i++){
		t*=s;
		tong+=t;
	}
	printf("%d\n",tong);
}
void bai13(){
	int i,n,tong=0,s=0,t=1;
	printf(" nhap gia tri \n ");
	scanf("%d",&s);
	printf(" nhap so 2*n+1\n ");
	scanf("%d",&n);
	for (i=2;i<=n;i+=2){
		t= pow(s,i);
		tong+=t;
	}
	printf("%d",tong);
}
void bai14(){
	int i,n,tong=0,s,t;
	printf("nhap gia tri \n");
	scanf("%d",&s);
	t=s;
	printf(" nhap mu \n");
	scanf("%d",&n);
	for(i=1;i<=n;i++){
		tong=pow(s,(2*i+1));
		t+=tong;
		printf("%d\n",t);
	}
}
void bai15(){
	float t,n,i,tong=0;
	scanf("%f",&n);
	if( n<1){
	printf("nhap lai \n");	
	}while(n<1);
	for(i=1;i<=n;i++){
		t+= i;
		tong+=1.0/t;
		printf("%f\n",tong);
	}
}
int main() {
	bai15();
	return 0;
}
