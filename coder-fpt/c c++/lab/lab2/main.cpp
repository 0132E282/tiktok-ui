#include <stdio.h>
#include <math.h>
/* run this program using the console pauser or add your own getch, system("pause") or input loop */
 #define Pi 3.14
int main() {
	float chuViHT=0, dienTichHT=0,r=0,diemT=0,diemH=0,diemL=0,diemTrungBinh=0,chuViTG=0; 
	float x1=0,y1=0,x2=0,y2=0,x3=0,y3=0,ab=0,bc=0,ac=0;
	int a=0,b=0;
	int tong=0 ,hieu=0;
	int chuVi=0, dienTich=0;
	// bài 1
	printf("2 so hieu va tong\n");
	printf ("nhap a :\n");
	scanf("%d",&a);
	printf("nhap b:\n");
	scanf("%d",&b);
	printf ("tong :%d hieu:%d\n",tong = a + b,	hieu = a -b);
	// end bài 1
	// bai 2 
	printf("dien tich chu vi hinh chu nhat\n");
	printf("nhap chieu dai a:\n");
	scanf("%d",&a);
	printf("nhap chieu rong b:\n");
	scanf("%d",&b);
	printf(" chu vi: %d dien tich:%d \n", chuVi=(a+b)*2, dienTich=a*b);
	//end bai 2
	// bai 3 
	printf("chu vi va dien tich hinh tron:\n");
	printf(" nhap ban kinh r\n");
	scanf("%f",&r);
	printf("dien tichL: %f va chu vi hinh tro la:%f \n",  dienTichHT =Pi*r*r, chuViHT= r*2*Pi );
	// end bai 3
	// bai4 
	 printf( "diem trung binh toan ly hoa:\n");
	 printf( " nhap lan luoc diem cac mon toan ly hoa:\n");
	 scanf("%f",&diemT);
	 scanf("%f",&diemH);
	 scanf("%f",&diemL);
	 diemTrungBinh = (diemT*3+diemH+diemL*2)/3;
	 printf("diem trung binh la:%f", diemTrungBinh);
	// end bai 4
	// bai 5
	printf("chu vi hinh tam giac: \n");
	printf(" nhap toa do x1 y1:\n");
	scanf("%f",&x1);
	scanf("%f",&y1);
	printf("nhap toa do x2 y2:\n");
	scanf("%f",&x2);
	scanf("%f",&y2);
	printf(" nhap toa do x3 y3:\n");
   	scanf("%f",&x3);
	scanf("%f",&y3);
		ab = sqrt((x2-x1)*(x2-x1)+(y2-y1)*(y2-y1));
		ac = sqrt((x3-x1)*(x3-x1)+(y3-y1)*(y3-y1));
		bc = sqrt((x3-x2)*(x3-x2)+(y3-y2)*(y3-y2));
	printf("chu vi tam gia la: %f",chuViTG =ab+bc+ac);
	// end bai 5
	return 0;
}

