#include <iostream>
#include <stdio.h>
#include <string.h>
struct student{
char ten[50];
float diem;
}max,sv[10000];
struct family{
    char hoVaTen[50];
    char quangHe[50];
    int tuoi;
}gd[100];
void chuongTrinhMot(){
    int n,i;
    printf("nhap so thanh vien trong gia dinh\n");
    scanf("%d",&n);
    getchar();
    for(i=0;i<n;i++){
        printf("\nhap ten:");
        fgets(gd[i].hoVaTen,sizeof(gd[i].hoVaTen),stdin);
        printf("quang he:");
        fgets(gd[i].quangHe,sizeof(gd[i].quangHe),stdin);
        printf("nhap tuoi:");
        scanf("%d",&gd[i].tuoi);
        getchar();
    }
    for(i=0;i<n;i++){
        printf("cua ban ten la:%s",gd[i].hoVaTen);
        printf("quan he :%s",gd[i].quangHe);
        printf(" tuoi la:%d\n",gd[i].tuoi);
    }
}
void chuongTrinhHai(){
    int n,i,tong=0;
    printf("nhap so nguyen duong \n");
    do{
        scanf("%d",&n);
        if(n<0){
            printf("moi lai ban nhap sai \n");
        }
    }while (n<0);
    for(i=0;i<=n;i++){
        if(i%5==0){
            printf("%d la chia het cho 5\n",i);
            tong+=i;
        }
    }
    printf("tong cac so chia het cho 5 =%d\n",tong);
}
void input__baiba(int n){
    int i,soluong=0;
     sv[n];
    for(i=0;i<n;i++){
        printf("nhap ten:");
        fgets(sv[i].ten,sizeof(sv[i]).ten,stdin);
        printf("nhap diem :");
        scanf("%f",&sv[i].diem);
        getchar();
    } 
}
int tinhTong(int n){
	int i,soluong=0;
	for(i=0;i<n;i++){
	 if(sv[i].diem>=5){
        	soluong+=i;
		}
    }    
    return soluong;
}
void timTopMot(int n){
	int i;
	sv[0]=max;
	for(i=0;i<n;i++){
		if(sv[i].diem>max.diem){
			max=sv[i];
		}
	}
}
void chuongTrinhBa(){
    int i,n;
    printf("nhap so luong sinh vien \n");
    scanf("%d",&n);
     getchar();
    input__baiba(n);
      for(i=0;i<n;i++){
        printf("ten sinh vien :%s",sv[i].ten);
        printf("diem :%f\n",sv[i].diem);
    }
    tinhTong(n);
    int tong=tinhTong(n);
    printf("tong hoc sinh tren 5: %d \n",tong);
    timTopMot(n);
    printf("sinh vien co diem cao nhat \n");
    printf("ten sinh vien :%s",max.ten);
        printf("diem :%f\n",max.diem);
}
int main(){
    chuongTrinhBa();
    return 0;
}
