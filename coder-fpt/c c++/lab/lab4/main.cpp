#include <stdio.h>
int main() {
	//
	int i,a,min=0,max=0,nhapSo;
	int tong,trungBinh,biemDiem;
	i =min;
	//
	menu:do{
	printf("============================\n");
	printf(" truong FPT POLYTECHNIC \n");
	printf("(1)tinh trung binh tong cua cac so tu nhien chia het cho 2\n");
     printf("(2)xay dung chuong trinh xac dinh so nguyen to \n");
     printf("(3)xay dung chuong trinh so chinh phuong\n");
     printf("xin moi nhap bai ban muon xem vao hoat nhap so 4  de thoat ra ");
     scanf("%d",&nhapSo);
    switch(nhapSo){
     	cs1:case 1:
     		printf("============================\n");
   			printf(" trung binh tong cac so chia het cho 2\n");
     		printf(" xin moi nhap so nho nhat :");
     		scanf("%d",&min);
     		printf(" xin moi nhap so lon nhat :");
     		scanf("%d",&max);
     		  while(  i<= max){
     			if( i %2 == 0){
     				tong += i;		
				 }
				i++;
			 }
			 trungBinh=tong/i;
			  printf("trung binh trong cac so chia het cho 2 : %d \n",trungBinh);
			  printf(" nhap so 0 den lam  lai hoat nhap so 1 thi quay lai menu 4  de thoat ra\n");
			  scanf("%d",&nhapSo);
			  if( nhapSo == 0){
			  	goto cs1;
			  }else if(nhapSo=1){
			  	goto menu;
			  }
			  break;
        cs2:case 2:
        	printf("============================\n");
        	printf("xay dung chuong trinh so nguyen to\n");
        	printf(" xin moi nhap vao gia tri\n");
        	scanf("%d",&a);
        	for(i=2;i<a;i++){
        		if(a%i==0){
        			tong++;
				}
			}
			if( tong==0){
				printf("%d la so nguyen to\n",a);
			}else{
				printf("%d khong phai la so nguyen to\n",a);
			}
			printf(" nhap so  0 den lam  lai hoat nhap so 1 thi quay lai menu 4  de thoat ra\n");
			  scanf("%d",&nhapSo);
			  if( nhapSo == 0){
			  	goto cs2;
			  }else if(nhapSo=1){
			  	goto menu;
			  }
				break;
	    cs3:case 3:
	    	bool soChiPhuong=false;
	    	printf("============================\n");
	    	printf(" xay dung chuong trinh so chinh phuong \n");
	    	printf("xin moi nhap vao gia tri a : ");
	    	scanf("%d",&a);
	    	for(i=1;i<a;i++){
			 	soChiPhuong=true;
			 	break;
		}
		if(soChiPhuong=true){
			printf(" %d la so chinh phuong\n");
		}else{
			printf( "khong phai la so chinh phuong \n");
		}
			 printf(" nhap so 0 den lam  lai nhap so 1  thi quay lai menu nhap 4  de thoat ra\n");
			  scanf("%d",&nhapSo);
			  if( nhapSo == 0 ){
			  	goto cs3;
			  }else if(nhapSo=1){
			  	goto menu;
			  }
			}
	}while( nhapSo !=4 );
	return 0;
}
