#include <iostream>
#include <string.h>
#include <stdio.h>
struct student{
	char msvv[50];
	char tenSinhVien[50];
	char nganhHoc[50];
	float diem;
	struct data{
	int ngay,thang,nam;
	}ngaySinh;
}sv[100],svTemp;
int input__InformationStudent(int &n){
	int i;
	for(i=0;i<n;i++){
		printf("STT:%d",i+1);
		printf("\nnhap ma so sinh vien:");
	    fgets(sv[i].msvv,sizeof(sv[i].msvv),stdin);
		printf("nhap ten sinh vien:");
	    fgets(sv[i].tenSinhVien,sizeof(sv[i].tenSinhVien),stdin);
		printf("nhap ngay sinh:");
		scanf("%d",&sv[i].ngaySinh.ngay);
		getchar();
		printf("nhap thang sinh:");
		scanf("%d",&sv[i].ngaySinh.thang);
		printf("nhap nam sinh:");
		scanf("%d",&sv[i].ngaySinh.nam);
		getchar();
		printf("nhap nganh hoc:");
		fgets(sv[i].nganhHoc,sizeof(sv[i].nganhHoc),stdin);
		printf("nhap diem:");
		scanf("%f",&sv[i].diem);
		getchar();
	}
	return n;
}
void ouput__ListStudent(int n){
	int i;
	for(i=0;i<n;i++){
		 printf("\nstt:%d\n",i+1);
	     printf("MSVV:%s",sv[i].msvv);
         printf("Ten:%s",sv[i].tenSinhVien);
	     printf("ngay sinh:%d/%d/%d\n",sv[i].ngaySinh.ngay,sv[i].ngaySinh.thang,sv[i].ngaySinh.nam);	
		 printf("nganh hoc:%s",sv[i].nganhHoc);
		 printf("diem:%f\n",sv[i].diem);
	}
}
//2
void relicStudent(int n){
	int i,j;
	for(i=0;i<n-1;i++){
		for(j=i+1;j<n;j++){
			if(sv[j].diem<sv[i].diem){
				svTemp=sv[j];
				sv[j]=sv[i];
				sv[i]=svTemp;
			}
		}
	}
	ouput__ListStudent(n);
}
void findStudent(int n){
	int i;
	char mssvStudent[50];
	printf("nhap mssv muon tim\n");
	fgets(mssvStudent,sizeof(mssvStudent),stdin);
	for(i=0;i<n;i++){
		if(strcmp(mssvStudent,sv[i].msvv)==0){
 	     printf("__________________________________\n");
		 printf("\nstt:%d\n",i+1);
	     printf("MSVV:%s",sv[i].msvv);
         printf("Ten:%s",sv[i].tenSinhVien);
	     printf("ngay sinh:%d/%d/%d\n",sv[i].ngaySinh.ngay,sv[i].ngaySinh.thang,sv[i].ngaySinh.nam);	
		 printf("nganh hoc:%s",sv[i].nganhHoc);
		 printf("diem:%f\n",sv[i].diem);
	     printf("__________________________________\n");
		 break;
		}else{
			printf("khong tim thay sinh vien \n");
			break;
		}
	}
	
}
int main(){
    int nhapSo,n;
	printf("nhap so luong sinh vien muon luu:");
	scanf("%d",&n);
	getchar();
	input__InformationStudent(n);
	menu:do{
		printf("(1)chuong trinh thong tin sinh vien\n");
		printf("(2)chuong trinh sap xep sinh vien theo tang dan \n");
		printf("(3)chuong trinh tim kiem sinh vien \n");
		printf("nhap chung nang hoat nhap 4 de thoar \n");
		scanf("%d",&nhapSo);
		getchar();
		switch(nhapSo){
			cas1:case 1:
				printf("==================================\n");
				printf("chuong trinh thong tin sinh vien\n");
				ouput__ListStudent(n);
		    	printf("___________________________________________________________________________");
			    retsart3:printf("nhap chung nang 0 den lam lai nhap 1 de ra menu nhap 4 de thoat \n");
		    	scanf("%d",&nhapSo);
		    	printf("___________________________________________________________________________");
					if(nhapSo==0){
						goto cas1;
					}else if(nhapSo==1){
						goto menu;
					}else{
						goto retsart1;
					}
				break;
			cas2:case 2:
				printf("===================================================\n");
				printf("chuong trinh sap xep sinh vien theo diem trung binh\n");			   
			    relicStudent(n);
		    	printf("___________________________________________________________________________");
			    retsart3:printf("nhap chung nang 0 den lam lai nhap 1 de ra menu nhap 4 de thoat \n");
		    	scanf("%d",&nhapSo);
		    	printf("___________________________________________________________________________");
		    	scanf("%d",&nhapSo);
				if(nhapSo==0){
						goto cas2;
				}else if(nhapSo==1){
						goto menu;
				}else{
						goto retsart2;
				}
				break;
			cas3:case 3:
				printf("==================================\n");
				printf("tim kiem sinh vien \n");
				printf("nhap chuc nang muon thuc hien\n");
			    findStudent(n);
			    printf("___________________________________________________________________________");
			    retsart3:printf("nhap chung nang 0 den lam lai nhap 1 de ra menu nhap 4 de thoat \n");
		    	scanf("%d",&nhapSo);
		    	printf("___________________________________________________________________________");
				if(nhapSo==0){
						goto cas3;
				}else if(nhapSo==1){
						goto menu;
				}else{
						goto retsart3;
				}
			default:
				printf("chuc nang khong duoc tim thay \n");
				break;
		}
	}while(nhapSo !=4);
	return 0;
}
