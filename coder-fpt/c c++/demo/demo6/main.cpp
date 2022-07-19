#include <iostream>
#include <stdio.h>
#include <string.h>
struct sach{
int ms;
char tenSach[50];
int soLuong;
double dongia;	
};
void ham1(){
	struct sach quyenSach1;
	quyenSach1.ms=001;
	strcpy(quyenSach1.tenSach,"anh yeu em co gai man ay");
	quyenSach1.dongia=500000;
	quyenSach1.soLuong=1;
	printf("ten sach %s\n",quyenSach1.tenSach);
	printf("so luong %d\n",quyenSach1.soLuong);
	printf("ma sach %d\n",quyenSach1.ms);
	printf("don gia %lf\n",quyenSach1.dongia);
}
struct sinhVien{
	int maSV;
	char name[50];
	struct date{
		int ngay;
		int thanh;
		int nam;
	}nguaySinh;
};
void chuoi(){
		struct sinhVien sv1;
	sv1.maSV=001;
	strcpy(sv1.name,"hoangphuc");
	sv1.nguaySinh.ngay=20;
	sv1.nguaySinh.thanh=20;
	sv1.nguaySinh.nam=2003;
	printf("ms:%d",sv1.maSV);
	printf("name:%s",sv1.name);
	printf("ngay %d , thang%d,nam %d",sv1.nguaySinh.ngay,sv1.nguaySinh.thanh,sv1.nguaySinh.nam);
}
union SinhVien{
	char ten[100];
	int ms;
	union Data{
		int ngay;
		int thang;
		int mam;
	}ngaySinh;
};
void uni(){
	union SinhVien sv1;
	printf("%d\n",sizeof(sv1));
	sv1.ms=001;
	printf("%d\n",sv1.ms);
	strcpy(sv1.ten,"nguyen hoang phuc");
	printf("%s\n",sv1.ten);
	sv1.ngaySinh.ngay=20;
	printf("%s\n",sv1.ngaySinh.ngay);
	sv1.ngaySinh.thang=11;
	printf("%d\n",sv1.ngaySinh.thang);
	sv1.ngaySinh.mam=2003;
	printf("%d\n",sv1.ngaySinh.mam);
}
int main() {
	uni();
	return 0;
}
