#include <stdio.h>
#include <string.h>
#include <iostream>
void chuongTrinhMot(){
    int n;
    do{
        printf("nhap thang :");
        scanf("%d",&n);
        if(n>12){
            printf("nhap khong dung nhap lai \n");
        }
    }while(n<1||n>12);
    if(n>=1 && n<=3){
        printf("mua xuan \n");
    }else if(n>=4&&n<=6){
        printf("mua ha \n");
    }else if(n>=7 && n<=6){
        printf("mua thu \n");
    }else if(n>=10&&n<=12){
        printf("mua dong \n");
    }
}
void chuongTrinhHai(){
    int min,max;
    int tong=0;
    printf("nhap so min:");
    scanf("%d",&min);
    printf("nhap so max:");
    scanf("%d",&max);
    for(min;min<=max;min++){
        if(min%2!=0){
            if(min%5==0){
                tong++;
            }
        }
    }
    printf("so le chia het cho 5 gom co :%d\n",tong);
}
struct books{
    char maSach[50];
    char tenSach[50];
    int soLuong;
}bks[3];
void inputBooks(){
   int i,stt=1;
   for(i=0;i<3;i++){
   	printf("stt:%d\n",stt++);
       printf("nhap ma sach :");
       gets(bks[i].maSach);
       printf("nhap ten sach :");
       gets(bks[i].tenSach);
       printf("nhap so luong sach :");
       scanf("%d",&bks[i].soLuong);
       getchar();
   }
}
int tongSoluong(){
	int i,tongsl=0;
	for(i=0;i<3;i++){
		tongsl+=bks[i].soLuong;
	}
	return tongsl;
}
void ouputBooksCTBa(){
    int i,stt=1;
    inputBooks();
    printf("stt   ma sach   ten sach   so luong   phieu giam gia\n");
    char pgg[50];
	for(i=0;i<3;i++){
		if(bks[i].soLuong>50){
			strcpy(pgg,"giam gia 10%");
		}
	}
    for(i=0;i<3;i++){
    	printf("%d       %s          %s         %d        %s\n",stt++,bks[i].maSach,bks[i].tenSach,bks[i].soLuong,pgg);
    }
    tongSoluong();
    printf("tong so luong sach :%d\n", tongSoluong());
}
int main(){
	
    return 0;
}
