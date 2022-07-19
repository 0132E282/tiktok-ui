#include <stdio.h>
#include <math.h>
#include <stdlib.h>
#include <time.h>	
void math(){
	// sqrt h�m cang bat 2
	double x =sqrt(9);
	printf("%lf\n",x);
	// h�m ceil h�m l�m tron len 
	double y = ceil(1.6);
	printf("%lf\n",y);
	// floor h�m l�m tron l�m
	double c = floor(1.4);
	printf("%lf\n",c);
	//round l�m tron 0.5< "l�m tro xuong"0.5>= "lam trin len"
	double b = round(1.4);
	double v = round(2.5);
	printf(" %lf %lf \n ",b,v);
}
void programHaphazard(){
	time_t seconds;
	seconds = time(NULL);
	
	srand((unsigned)seconds);
	
	int soNgauNhien,x;
	printf(" xin moi nha 1 con so 1-15\n");
	scanf("%d",&x);
	soNgauNhien = rand()%15 +1;
	printf(" %d %d \n",x,soNgauNhien);
	if(x == soNgauNhien){
		printf(" chuc mung may da dien voi mien cuc lac\n");
	}else{
		printf(" may siu roi di xuong diem duong choi di \n");
	}
}
void hoanDoi(int x, int y){
	/// chuong trinh hoang vi 
	int temp;
	temp=x;
	x=y;
	y=temp;
	printf(" %d\n",x);
	printf("%d\n",y);
	
}

int main(){
 int a=100; 
 int b=200;
printf("%d \n",a);
printf("%d\n",b);
hoanDoi(a,b);
printf("%d\n",a);
printf("%d\n",b);
	return 0;
}

