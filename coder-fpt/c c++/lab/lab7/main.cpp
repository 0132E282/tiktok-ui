#include <iostream>
#include <stdio.h>
#include <string.h>
void nguyenAmPhuAm(){	
char kiTu[100];
	printf("nhap chuoi ky tu a->z :");
	fgets(kiTu,sizeof(kiTu),stdin);
	int i=0,n=0,p=0;
	while(kiTu[i++]!='\0'){
		if(kiTu[i]=='a'|| kiTu[i]=='u'||kiTu[i]=='e'||kiTu[i]=='i'||kiTu[i]=='0'){
		    n++;
		}else{
			p++;
		}
		i++;
	}
	printf("\nchuoi:%s \n nguyen am: %d \n phu am:%d \n",kiTu,n,p);
}
void password_And_username(){
	char userSys[]="admin";
	char passSys[]="123";
	char username[50];
	char password[50];
	printf("nhap username :");
	fgets(username,sizeof(username),stdin);
	printf("nhap password :");
	fgets(password,sizeof(password),stdin);
	if(strcmp(strlwr(username),userSys)==0&&strcmp(strlwr(password),passSys)==0){
		printf("ban da dang nhap thanh cong \n ");
	}else{
		printf("ban sai username hoat password \n");
	}
} 
void sapXepTheoBanChuCai(){
	char kiTu[5][20];
	char t[20];
	int i,j;
	printf("nhap 5 chuoi tu ban phim \n");
	for(i=0;i<5;i++){
		printf("nhap ki tu [%d]=",i+1);
		scanf("%s",kiTu[i]);
	}
	for(i=1;i<5;i++){
		for(j=1;j<5;j++){
			if(strcmp(kiTu[j-1],kiTu[j])>0){
				strcpy(t,kiTu[j-1]);
				strcpy(kiTu[j-1],kiTu[j]);
				strcpy(kiTu[j],t);
			}
		}
	}
	printf("\n sap xep tu cua cac chuoi:");
	for(i=0;i<5;i++){
		printf("\n%s",kiTu[i]);
	}
}
int main() {
	int nhapSo;
	menu:do{
		printf("(1)chuong trinh dem so nguyen va phu am cua 1 chuoi\n");
		printf("(2)chuong trinh login\n");
		printf("(3)chuong trinh sap xep chuoi theo chu cai\n");  
		scanf("%d",&nhapSo);
		getchar();
		switch(nhapSo){
			cas1:case 1:
			printf("(1)chuong trinh dem so nguyen va phu am cua 1 chuoi\n");
			nguyenAmPhuAm();
			printf("nhap so 0 de lam lai nhap so 1 de quay lai menu nhap so 4 de thoat \n");
			scanf("%d",&nhapSo);
			getchar();
			if(nhapSo==1){
				goto menu;
			}else if(nhapSo==0){
				goto cas1;
			}
			break;
			cas2:case 2:
			printf("(2)chuong trinh  login \n");
		    password_And_username();
			printf("nhap so 0 de lam lai nhap so 1 de quay lai menu nhap so 4 de thoat \n");
		    scanf("%d",&nhapSo);
		    getchar();
			if(nhapSo==1){
				goto menu;
			}else if(nhapSo==0){
				goto cas2;
			}
			break;
			cas3:case 3:	
			printf("(3)chuong trinh sap xep chuoi theo chu cai \n");
            sapXepTheoBanChuCai();	
		    printf("nhap so 0 de lam lai nhap so 1 de quay lai menu nhap so 4 de thoat \n");
		    scanf("%d",&nhapSo);
		    getchar();	    
			if(nhapSo==1){
				goto menu;
			}else if(nhapSo==0){
				goto cas2;
			}
			break;
		}
}while(nhapSo!= 4);
	return 0;
}
