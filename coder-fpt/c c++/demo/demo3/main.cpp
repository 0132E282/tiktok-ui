#include <iostream>
#include <stdio.h>
int mang(){
	// khai bao mang voi for
	int i,n;
	scanf("%d",&n);	
	int arr[n];
	for (i=0; i<n ;i++){
		printf("arr[%d]",i);
		scanf(" %d",&arr[i]);
	}
	// xuat mang ra ben ngoai
	for(i=0;i<n;i++){
	  printf("[%d] %d\n",i,arr[i]);
	}
	return arr[i];
}
void xapSeptang(){
	// xap sep theo chieu tang dan
	int i,j,n;
	scanf("%d",&n);
	int arr[n];
	for(i=0;i<n;i++){
		printf("[%d]",i);
		scanf("%d",&arr[i]);
	
	}
	// xap sep theo thuat toan bublle sorrt
	for(i=0;i<n-1;i++){
		for(j=i+1;j<n;j++){
			if(arr[j]<arr[i]){
				int temp;
				temp = arr[j];
				arr[j]=arr[i];
				arr[i]=temp;
			}
		}
	}
	for (i=0;i<n;i++){
	printf("[%d] %d\n",i,arr[i]);
}
}
void giamDan(){
 // xap xep theo chiu giam dan
 int i,j,n;
	scanf("%d",&n);
	int arr[n];
	for(i=0;i<n;i++){
		printf("[%d]",i);
		scanf("%d",&arr[i]);
	
	}
	// xap sep theo thuat toan bublle sorrt
	for(i= 0; i < n-1;i++){
		for(j=i+1;j<n;j++){
			if(arr[i]<arr[j]){
				int temp;
				temp = arr[j];
				arr[j]=arr[i];
				arr[i]=temp;
			}
		}
	}
	for (i=0;i<n;i++){
	printf("[%d] %d\n",i,arr[i]);
}
}
// mang 2 chieu(ma tran)
void mangHaiChieu(){
	int i,j,n,m;
	scanf("%d",&n);
	scanf("%d",&m);
	int arr[n][m];
	for(i=0; i  <n;i++){
	for(j=0; j <m;j++){
		printf("[%d][%d]",i,j);
		scanf("%d",&arr[i][j]);
	}
}
	for (i=0;i<n;i++){
		for(j=0;j<m;j++);
		printf("arr[%d] [%d]=%d \n",i,j,arr[i][j] );
	}
}

int main() {
mangHaiChieu();
	return 0;
}
