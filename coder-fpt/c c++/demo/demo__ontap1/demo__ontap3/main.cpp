#include <stdio.h>
#include <iostream>
#include <string.h>
void chuongTrinhMot(){
    int n,i,soluong=0;
    printf("nhap so n :");
    scanf("%d",&n);
    for(i=1;i<n;i++){
        if(i%3==0){
           soluong++;
        }
    }
    printf("co %d chia het 3\n",soluong);
}
void chuongTrinhHai(){
    char a[50];
    char b[50];
    char c[50];
    printf("nhap chuoi a:");
    gets(a);
    printf("nhap chuoi b:");
    gets(b);
    printf("nhap chuoi c:");
    gets(c);
    if(strcmp(a,b)>0 &&strcmp(a,c)>0){
        printf("chuoi co do dai lon nhat %s\n",a);
    }else if(strcmp(b,a)>0&&strcmp(b,c)>0){
        printf("chuoi co do dai lon nhat %s\n",b);
    }else{
       printf("chuoi co do dai lon nhat %s\n",c);
    }
}
struct student{
    int mssv,tuoi;
    char name[100];
}sd1[3];
void inputStudent(){
    int i,stt=1;
    for(i=0;i<3;i++){
    printf("\nstt:%d\n",stt++);
    printf("nhap mssv :");
    scanf("%d",&sd1[i].mssv);
    getchar();
    printf("ten:");
    gets(sd1[i].name);
    printf("nhap tuoi :");
    scanf("%d",&sd1[i].tuoi);
 }
}
int TBTuoi(){
    int i,tuoiTB=0,tong=0;
    for(i=0;i<3;i++){
        tong+=sd1[i].tuoi;
    }
     tuoiTB=tong/3;
    return tuoiTB;
}
void ouputTrinhBa(){
    int i,stt=1;
    inputStudent();
    for(i=0;i<3;i++){
        printf("stt:%d",stt++);
        printf("MSSV:%d\n",sd1[i].mssv);
        printf("ten:%s\n",sd1[i].name);
        printf("tuoi:%d\n",sd1[i].tuoi);
    }
    TBTuoi();
    int tuoi=TBTuoi();
    printf("trung binh tuoi %d\n",tuoi);
}
int main(){
   ouputTrinhBa();
    return 0;
}