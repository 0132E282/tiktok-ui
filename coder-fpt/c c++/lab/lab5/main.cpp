#include <iostream>

/* run this program using the console pauser or add your own getch, system("pause") or input loop */
int giaTri(int a , int b , int c){
	int max;
	if(a>b && a >c ){
		printf(" gia tri lon nhat %d ",a);
	}else if( b>a&& b>c ){
	    printf(" gia tri lon nha nhat %d ",b);
	}else if ( c>a&& c>b ){
		printf(" gia tri lon nhat %d ",c);
	}
	return max;
}
void namNhuan( int nam){
	if ( nam%4 ==0 && nam%100 !=0){
		printf("nam %d la nam nhuan\n",nam);
	}else{
		printf(" nam %d khong phai la nam nhuan \n ",nam);
	}
}
void hoangVi( int *a ,int *b){
	int temp;
	temp = *a;
	*a = *b;
	*b= temp;
}
int main() {
	int soMax,nhapSo;
	menu:do{
	printf(" (1) chuong trinh gia tri lon nhat cua ba so \n");
	printf(" (2) chuong trinh xay dung ham tinh nam nhuan\n");
	printf(" (3) chuong trinh xay dung ham hoang vi \n  ");
	printf(" nhap bai muon xem hoat nhap so _4_ de thoat \n");
	scanf("%d",&nhapSo);
	switch(nhapSo){
	  resetBai1:case 1 :
	  	int so1,so2,so3;
	  	printf("-------------------------------\n");
  	  printf(" sinh moi nhap 3 so de so sanh\n");
  	  scanf("%d",&so1);
      scanf("%d",&so2);
  	  scanf("%d",&so3);
      giaTri(so1,so2,so3);
      printf(" mhap so -0- de lam lai bai nhap so -1- de mo menu nhap -4- de thoat khoi chuong trinh \n ");
      scanf("%d",&nhapSo);
	  if(nhapSo==0){
      	goto resetBai1 ;
	  }else if( nhapSo == 1){
	  	goto menu;
	  }
	  break;
	resetBai2:case 2:
		printf("----------------------------------\n");
		printf(" (2) chuong trinh xay dung ham tinh nam nhuan\n ");
    	printf(" sinh moi nhap so nam muon kiem tra \n");
    	int nhapSoNam ;
    	scanf("%d",&nhapSoNam);
    	namNhuan(nhapSoNam);
   	     printf(" mhap so -0- de lam lai bai nhap so -1- de mo menu nhap -4- de thoat khoi chuong trinh \n ");
        scanf("%d",&nhapSo);
	    if(nhapSo==0){
        	goto	resetBai2 ;
    	  }else if( nhapSo == 1){
	  	goto menu;
	  }
	break;
	resetBai3:case 3 :
		int a , b;
		printf("-------------------------\n");
		printf("(3) chuong trinh xay dung ham hoang vi \n  ");
		printf(" chuong trinh hoang voi\n");
		printf("hay nhap 2 so \n");
		scanf("%d",&a);
		scanf("%d",&b);
		printf(" truoc khi hoang vi \n");
	    printf(" gia tri cua so a:%d\n",a);
		printf(" gia tri cua so b:%d\n",b);
		hoangVi(&a,&b);
		printf(" sua khi hoang vi \n");
		printf(" gia tri cua so a:%d\n",a);
		printf(" gia tri cua so b:%d\n",b);
	  printf(" mhap so -0- de lam lai bai nhap so -1- de mo menu nhap -4- de thoat khoi chuong trinh \n ");
       scanf("%d",&nhapSo);
	  if(nhapSo==0){
      	goto resetBai3;
	  }else if( nhapSo == 1){
	  	goto menu;
	  }
        break;
	}
}while(nhapSo !=4 );
	return 0;
}
