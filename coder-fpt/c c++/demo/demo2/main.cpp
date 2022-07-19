#include <stdio.h>
// cau truc mang mot chieu 
// kieu du lieu(int,loat,double...) + ten mang +[so mang] 
void mangMotChieu__Mot(){
	int i;
	// mang mot chieu 0 1 2 3  4
	int arr[5]={10,1,2,4,6};
	// int arr[5] ={0,1,2,3,4}
	for(i=0;i<5;i++){
		printf("arr[%d]=%d\n",i,arr[i]);
	}
}
// kieu  du lieu 
void mangMotChieu__Hai(){
	int i,n;
	scanf("%d",&n);
	int arr[n];
	for(i=0;i < n;i++){
		printf("[%d]",i);
		scanf("%d",&arr[i]);
	}
	for(i=0;i<n;i++){
		printf("[%d]=%d \n",i,arr[i]);
	}
}
void mangMotChieu__Ba (){
	int i , arr[3];
	arr[0] =12;
	arr[1] =12;
	arr[2] =52;
	for( i=0;i<3;i++){
		printf("[%d]=%d\n",i,arr[i]);
	}
}
int main (){
	int nhapSo;
	scanf("%d",&nhapSo);
	switch(nhapSo){
	case 1:
	     mangMotChieu__Mot();
		 break;
    case 2:
	   	mangMotChieu__Hai();
	   	break;
	case 3:
 		mangMotChieu__Ba ();
 		break;
	return 0;
}
}
