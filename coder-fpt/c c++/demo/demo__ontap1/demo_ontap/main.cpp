#include <stdio.h>
#include <iostream>
#include <string.h>
void inputChuongTrinhMo(){
    int tong,min,max,i;
    printf("nhap so nho nhat:");
    scanf("%d",&min);
    printf("nhap so lon nhat:");
    scanf("%d",&max);
    for( i=min;i<=max;i++){
        tong+= i;
    }
     printf("tong so tu %d den %d la %d\n",min,max,tong);
}
void ChuongTrinhHai(){
	char name[50];
	printf("nhap ten cua ban :");
	fgets(name,sizeof(name),stdin);
	printf("ten dao nguoc %s",strrev(name));
}
struct nhanSu{
	char hoTen[50];
	char msnv[50];
	char diaChi[100];
	float luong;
}ns[3];
void inputThongTin(){
	int i,n=1;
	printf("nhap thonfg tin ca nhan \n");
	for(i=0;i<3;i++){
		printf("stt:%d\n",n++);
		printf("MSNV:");
		fgets(ns[i].msnv,sizeof(ns[i].msnv),stdin);
		printf("ho va ten:");
		fgets(ns[i].hoTen,sizeof(ns[i].hoTen),stdin);
		printf("dia chi:");
		fgets(ns[i].diaChi,sizeof(ns[i].diaChi),stdin);
		printf("luong:");
		scanf("%f",&ns[i].luong);
		getchar();
	}
}
float tongLuong(){
	int i,tongLuong,tong=0;
	for(i=0;i<3;i++){
		tong+= ns[i].luong;
	}
	return tong;
}
void ouputChuongTrinhBa(){
	int i,n=1;
	tongLuong();
	for(i=0;i<3;i++){
		printf("stt:%d\n",n++);
		printf("MSNV:%s",ns[i].msnv);
		printf("ho va ten : %s",ns[i].hoTen);
		printf("dia chi :%s",ns[i].diaChi);
		printf("luong :%f\n",ns[i].luong);
	}
	printf("tong luong cua cac nhan vien :%f",tongLuong());
}
int main(){
	inputThongTin();
    ouputChuongTrinhBa();
    return 0;
}
