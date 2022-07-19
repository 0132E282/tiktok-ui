#include <iostream>
#include <string.h>
void chuoi(){
	char chuoiA[]="fpt Polytechnic";
	printf("%s",chuoiA);
}
void chuoiA( ){
	char arr[50];
	gets(arr);
	puts(arr);
}
void chuoiB(){
	char a[50];
	reset:printf("name:");
	gets(a);
	if (strlen(a) < 4 ){
		printf(" nhap lai di cu \n ");
		goto reset;	
	}else{
		// xuat chuoi ra mang hinh
		puts(a);
	}
}
void chuoiD(){
	char a[50];
	char x[]="dep trai";
	char b[50];
	// gets nhap chuoi tu ban phim 
	reset:printf("nhap ten cua tao vao \n ");
	gets(a);
	if(strlen(a)<5){
		goto reset;
	}
	// strcpy sao chep a sang b
	strcpy(b,a);
	printf("ten cua tao la %s\n",a);
	// strcat ket hai chuoi lai vs nhau
	printf("ten that cua tao la %s\n",strcat(b,x));
}
void hamTrongChuoi(){
	char a[50];
	char b[50];
	printf("username:");
	gets(a);
	printf("password:");
	gets(b);
	printf("\nusername:%s \npassword:%s\n",a,b);
	// strcmp ham so sanh
	// strlw ham chuyen chu ve chu thuong 
	// stesup ham chuyen chu ve chu hoa 
	char c[]="hoangphuc";
	char x[]="p123";
	if(strcmp(strlwr(a),c)==0 && strcmp(strlwr(b),x)==0){
		printf("ok may doan dung \n");
	}else{
		printf(" han ong lam video truong cao dang fpt cat tao lao\n");
	}
}
void ham2(){
	char a[]="fpt";
	printf("%s\n",a);
	// ham strrev dao nguoc cac chuoi 
	printf("%s",strrev(a));
	// strstr tro den vi tri xuat hien dau tien cua chuoi con 
	char d[] ="hoangphuc";
	char *sub;
	sub = strstr(d,"phuc");
	printf("\n da tim thay chuoi %s",sub);
	
}
int main(){
	ham2();
	return 0;

}
