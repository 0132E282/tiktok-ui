#include <stdio.h>
#include <math.h>
#include <string.h>
#include <time.h>
#include <stdlib.h>
//1
float kiemTraSoNguyen( float n ){
	bool flag = false; 
	 if(n == round(n) ){
	 	flag = true ;
	 }
	 return flag ;
}
int kiemTraSoNguyenTo( int n ) {
	int i;
	bool flag = false;
	for (i =2; i<n;i++ ){
		if(n%i == 0){
			flag=true;
		}
	}
 return flag ;
}
int chinhPhuong( int n){
    int i ;
	bool flag = false;
	for ( i=0;i<n;i++){
		if (i*i == n ){
			flag = true;
		}
	} 
	return flag;
}
void chuongTrinhmot(){
	float n;
	printf("xin moi nhap so ban muon kiem tra \n ");
	scanf("%f",&n);
	printf("================\n");
	printf(" kiem tra so nguyen \n");
		kiemTraSoNguyen( n );
		if (kiemTraSoNguyen(n ) == true){
			printf("%f la so nguyen  \n ",n);
		}else{
			printf("%f khong phai la so nguyen \n",n);
		}
	printf("\n");
    	printf("kiem tra so nguyen to \n ");
		kiemTraSoNguyenTo(n);
		int x =n;
		if(kiemTraSoNguyenTo(n) == true ){
	    	printf("%d khong phai la so nguyen to \n",x);
		}else{
    		printf("%d la so nguyen to \n ", x);
		}
	printf("\n");
	printf("kiem tra so chinh phuong \n ");
		chinhPhuong(n);
		if(chinhPhuong(n) == true ){ 
		    printf("%d la so chinh phuong \n",x);
		}else {
     		printf("%d khong khong phai la so chinh phuong \n",x);
		}
	}
	//2
int timUocchung(int n ,int y ){
	if(n== 0 || y== 0 ){
		printf("so 0 khong co uoc chung lon nhat \n ");
	}
	while(n!= y){
		if(n>y){
			n-=y;
		}else{
			y -= n;
		}
	}
	return n;
}
void chuongTrinh__hai(){
	int n,y;
	printf("_____________________\n");
	printf("uoc chung lon nhat \n ");
	printf("xin moi nhap so a = ");
	scanf("%d",&n);
	printf("xin moi nhap so b =");
	scanf("%d",&y);
    timUocchung(n,y);   
	printf("%d la so boi chung giua %d va %d\n", timUocchung(n,y),n,y);
	printf("boi chung nho nhat \n ");
	int BCNN = n*y / timUocchung(n,y);   
	printf("BCNN = %d cua %d va %d \n ",BCNN,n,y );
}
//3
int tienGioi( int n ,int y){
	int thanhTien;
	if( n > 12 || n < 23 || y > 12 || y < 23 ){
	if(y-n < 3){
	thanhTien=(y-n)*150000;
	}else{
		thanhTien=((y-n)*150000)-(((y-n)*150000)*0.30);
	}
}else if(n >14 || n<17||y>14 || y<17 ){
	if(y-n < 3){	
	 thanhTien=((y-n)*150000)-(((y-n)*150000)*0.10);
	}else{
		thanhTien=((y-n)*150000)-(((y-n)*150000)*0.40);
	}
}
return thanhTien;
}
void chuongTrinh__Ba(){
	int n,y;
	printf("_____________________\n");
	do{
		printf("xin moi nhap gioi bac dau =");
		scanf("%d",&n);
		printf("xin moi nhap gioi ket thuc =");
		scanf("%d",&y);
		if(n<12|| y<12 ){
		printf("ban gioi nhap sai gioi moi nhap  lai \n ");
		}
	}while(n<12||y<n);
	tienGioi(n,y);
	printf("________________________________________\n");
	printf("tong tien gioi la %d \n ",tienGioi(n,y));
	printf("________________________________________\n");
	
}
//4
float tinhTienDien( float n ){
	float tongTienDien;
	if (n <= 50 || n > 0){
		tongTienDien = n*1.678;
	}else if ( n > 51 ){
		tongTienDien = n*1.734;
	}else if ( n > 101 ){
	 	tongTienDien = n*2.014;
	}else if ( n > 201 ){
		tongTienDien = n*2.536;
    }else if ( n > 301 ){
    	tongTienDien = n*2.834;
    }else if ( n >= 401 ){
	    tongTienDien = n*2.927;
    }
    printf("__________________________________________\n");
    printf("tong tien dien la = %f VND \n",tongTienDien );
   	printf("__________________________________________\n");
}
//bai 6
int laiPhaitra(int n ){
	int y = n;
	printf("_____________________________________\n");
	int i,tienLai,tienGoc,soTienPhaiTra,tongTien;
	printf("so tien phai tra trong 12 thang  la \n");
	printf("________________________________________________________________________________________________________________\n");
	for(i=1;i<=12;i++){
		tienLai=n*0.05;
		tienGoc=y/12;
		soTienPhaiTra=tienLai+tienGoc;
		n-= tienGoc;
		printf("thang %d  | tien lai %d  | tien goc %d  | tong tien %d  | tien con lai %d  |\n",i,tienLai,tienGoc,soTienPhaiTra,n);
	}
	 printf("_______________________________________________________________________________________________________________\n");
	return i;
}
void chuongTrinh__sau(){
	int x;
	printf("xin moi nhap so tien muon vay \n ");
	scanf("%d",&x);
	laiPhaitra(x);
}
// 8
struct student{
	char name[50];
	float diem;
	char hocLuc[50];
}sd[100];
void chuongTrinh__Tam(){
	int n,i,j,k=1,y=1;
	printf("nhap so luong sinh vien:");
	scanf("%d",&n);
	int arr[n];
	getchar();
	for(i=0;i<n;i++){
		printf("\nSTT %d\n",k++);
		printf("nhap ten sinh vien :");
		fgets(sd[i].name,sizeof(sd[i].name),stdin);
	do{
		printf("nhap diem sinh vien:");
		scanf("%f",&sd[i].diem);
	}while(sd[i].diem>10&&sd[i].diem<0&&sd[i].diem==(char)sd[i].diem);
		getchar();
		if(sd[i].diem>=9&&sd[i].diem<=10){
			strcpy(sd[i].hocLuc,"xuat sac");
		}else if(sd[i].diem>=8){
			strcpy(sd[i].hocLuc,"gioi");
		}else if(sd[i].diem>=6.5){
			strcpy(sd[i].hocLuc,"kha");
		}else if(sd[i].diem>=5){
			strcpy(sd[i].hocLuc,"trung binh");
		}else if(sd[i].diem<5){
			strcpy(sd[i].hocLuc,"yeu");
		}
	}
	for(i=0;i<n-1;i++){
		for(j=i+1;j<n;j++){
			if(sd[j].diem>sd[i].diem){
				student temp=sd[j];
				sd[j]=sd[i];
                sd[i]=temp;
			}
		}
	}
	printf("%d",arr[i]);
	printf("________________________________________________________\n");
	for(i=0;i<n;i++){
		printf("\n hang: %d\n",y++);
		printf("ten:%s",sd[i].name);
	    printf("diem:%f\n",sd[i].diem);
	    printf("hoc luc:%s\n",sd[i].hocLuc);
	}
	printf("________________________________________________________\n");
	

}
//9

void calculate__lottrey(int n,int arr[]){
    int r[n];
	int i;
	srand(time(NULL));
	for(i=0;i<3;i++){
		r[i]=rand()%99999+10000;
	}
	printf("danh sach sinh vien chung giai cua cau fpt \n");
	int k;
	for(i=0;i<3;i++){
	printf("stt%d ps: %d \n",k++,r[i]);
		if(arr[i]==r[i]){
		printf("sv %d chuc mung sinh vien ma so ps:%d chung gia fpt \n",i,arr[i]);	
	}
} 


}
void inputOuput__resultLottrey(){
	int i;
	int n;
	printf("nhap so luong sinh vien tham gia \n");
	scanf("%d",&n);
	int arr[n];
	//  printf("nhap ma so sinh vien \n");
	 int k=1;
	for(i=0;i<n;i++){
	    do{
	    printf("sv%d ps:",k++);
		scanf("%d",&arr[i]);
    	}while(arr[i]<10000||arr[i]>99999);
        if(arr[i]==00000){
			break;
		}
	}
 	calculate__lottrey(n,arr);
}
// 10
struct phanSo{
	int ts;
	int ms;
}psA,psB,hieu,tong,thuong,tich;
void input__phanSo(){
	while(psA.ts==0&&psA.ms==0&&psB.ms==0&&psB.ts==0){
		printf("nhap so a \n");
	    scanf("%d",&psA.ts);
	    printf("-\n");
	    scanf("%d",&psA.ms);
	    printf("nhap phan so b\n");
	    scanf("%d",&psB.ts);
	    printf("-\n");
	    scanf("%d",&psB.ms);
	}
	
}
void calculate(){
	if(psA.ms==psB.ms){
		tong.ts=psA.ts+psB.ts;
		tong.ms=psA.ms;
	}else{
		tong.ts=(psA.ms*psB.ts)+(psA.ts*psB.ms);
		tong.ms=psA.ms*psB.ms;
	}
	if(psA.ms==psB.ms){
		if(psA.ts-psB.ts==0){
		   hieu.ms==0;
		   hieu.ts==0;
	     }else{
		   hieu.ts=psA.ts-psB.ts;
		   hieu.ms=psA.ms;
	}
	}else{
		hieu.ts=(psA.ms*psB.ts)-(psA.ts*psB.ms);
		hieu.ms=psA.ms*psB.ms;
	}
	tich.ts=psA.ts*psB.ts;
	tich.ms=psA.ms*psB.ms;
	thuong.ts=psA.ts*psB.ms;
	thuong.ms=psA.ms*psB.ts;

}
void ouput__phanSo(){
	printf("tong cua %d/%d+%d/%d=%d/%d\n",psA.ts,psA.ms,psB.ts,psB.ms,tong.ts,tong.ms);
	printf("hieu cua %d/%d-%d/%d=%d/%d\n",psA.ts,psA.ms,psB.ts,psB.ms,hieu.ts,hieu.ms);
    printf("tich cua %d/%dx%d/%d=%d/%d\n",psA.ts,psA.ms,psB.ts,psB.ms,tich.ts,tich.ms);
    printf("thuong cua %d/%d/%d/%d=%d/%d\n",psA.ts,psA.ms,psB.ts,psB.ms,thuong.ts,thuong.ms);
}
int main() {
	int chucNang;
	menu:do{
	printf("bai tap Assigment cao dang FPT POLYTEHNIC\n");
	printf("(1)kiem ta so nguyen");
	printf("(2)tim uoc so chung va boi so chung cua 2 so\n");
	printf("(3)chuong trinh tinh tien cua quang caraoke\n");
	printf("(4)tinh tien dien\n");
	printf("(5)chuc nang doi tien \n");
	printf("(6)xay dung chuc nang lai suat ngan hang vay tra gop \n");
	printf("(7)xay dung chuong trinh vay tien mua xe\n");
	printf("(8)xap sep thong tin cho sinh vien\n");
	printf("(9)xay dung game FPOLY_LOTT(2/15)\n");
	printf("(10)xay dung chuong trinh toan phan so\n");
	printf("===============================================\n");
	printf("xin moi nhap vao chuc nang ban muon xem hoat nhap 11 de thoat:\n");
	scanf("%d",&chucNang);
	switch(chucNang){
		rv1:case 1:
			printf("===============================================\n");
            printf(" chao mung ban den voi chuc nang 1 !! \n");
            chuongTrinhmot();
           	printf("\n");
			printf("nhap so 0 de lam lai nhap so 1 de chon chuc nang nhap 11 de thoat \n");
            scanf("%d",&chucNang);
		    if(chucNang==0){
            	goto rv1;
			}else if( chucNang==1){
				goto menu;
			}
            break;
		rv2:case 2:
			printf("===============================================\n");
		    printf(" chao mung ban den voi chuc nang 2 !! \n");
		    printf("tim uoc so chung va boi so chung cua 2 so \n");
		    chuongTrinh__hai();
		   	printf("\n");
			printf("nhap so 0 de lam lai nhap so 1 de chon chuc nang nhap 11 de thoat \n");
		     scanf("%d",&chucNang);
			 if(chucNang==0){
            	goto rv2;
			}else if( chucNang==1){
				goto menu;
			}
	    	break;
		rv3:case 3:
			printf("===============================================\n");
            printf(" chao mung ban den voi chuc nang 3!! \n");
            printf("chuong trinh tinh tien cua quang caraoke\n");
            printf(" xin hay nhap gio bac dau va gioi ke thuc \n ");
            chuongTrinh__Ba();
           	printf("\n");
		    printf("nhap so 0 de lam lai nhap so 1 de chon chuc nang nhap 11 de thoat \n");
            scanf("%d",&chucNang);
		    if(chucNang==0){
            	goto rv3;
			}else if( chucNang==1){
				goto menu;
			}
            break;
	    rv4:case 4:
	    	printf("===============================================\n");
            printf(" chao mung ban den voi chuc nang 4!! \n");
		    printf(" tinh tien dien\n");
		    float a;
		    printf(" xin moi nhap so kWH su dung \n ");
		    scanf ("%f",&a);
		    tinhTienDien(a);
		   	printf("\n");
		    printf("nhap so 0 de lam lai nhap so 1 de chon chuc nang nhap 11 de thoat \n");
		     scanf("%d",&chucNang);
			 if(chucNang == 0 ){
            	goto rv4;
			}else if( chucNang==1){
				goto menu;
			}
		    break;
		rv5:case 5:
			printf("===============================================\n");
            printf(" chao mung ban den voi chuc nang 5!! \n");
            printf(" chuc nang doi tien \n");
         	printf("\n");
		    printf("nhap so 0 de lam lai nhap so 1 de chon chuc nang nhap 11 de thoat \n");
             	scanf("%d",&chucNang);
			 if(chucNang == 0 ){
            	goto rv5;
			}else if( chucNang==1){
				goto menu;
			}
            break;
		rv6:case 6:
			printf("===============================================\n");
			printf(" chao mung ban den voi chuc nang 6!! \n"); 
			printf("xay dung chuc nang lai suat ngan hang vay tra gop \n");
            chuongTrinh__sau();
        	printf("\n");
		    printf("nhap so 0 de lam lai nhap so 1 de chon chuc nang nhap 11 de thoat \n");
           	scanf("%d",&chucNang);
			 if(chucNang==0){
            	goto rv6;
			}else if( chucNang==1){
				goto menu;
			}
		    break;
		rv7:case 7:
			printf("===============================================\n");
			printf(" chao mung ban den voi chuc nang 7!! \n");
			printf("xay dung chuong trinh vay tien mua xe\n");
			printf("\n");
			printf("nhap so 0 de lam lai nhap so 1 de chon chuc nang nhap 11 de thoat \n");
			scanf("%d",&chucNang);
			 if(chucNang==0){
            	goto rv7;
			}else if( chucNang==1){
				goto menu;
			}
			break;
		rv8:case 8:
			printf("===============================================\n");
			printf(" chao mung ban den voi chuc nang 8!! \n");
			printf("xap sep thong tin cho sinh vien \n");
			printf("\n");
			chuongTrinh__Tam();
			printf("nhap so 0 de lam lai nhap so 1 de chon chuc nang nhap 11 de thoat \n");
		   	scanf("%d",&chucNang);
			 if(chucNang==0){
            	goto rv8;
			}else if( chucNang==1){
				goto menu;
			}
			break;
		rv9:case 9:
			printf("===============================================\n");
			printf(" chao mung ban den voi chuc nang 9!! \n");
			 printf(" xay dung game FPOLY_LOTT(2/15)\n");
			printf("\n");
			inputOuput__resultLottrey();	
		
			 printf("nhap so 0 de lam lai nhap so 1 de chon chuc nang nhap 11 de thoat \n");
		 	scanf("%d",&chucNang);
			  if(chucNang==0){
            	goto rv9;
			}else if(chucNang==1){
				goto menu;
			}
		     break;
       rv10:case 10:
          	printf("===============================================\n");
        	printf(" chao mung ban den voi chuc nang 10!! \n");
        	printf(" xay dung chuong trinh toan phan so)");
        	printf("\n");
        	input__phanSo();
       	    calculate();
			ouput__phanSo();	
        	printf("nhap so 0 de lam lai nhap so 1 de chon chuc nang nhap 11 de thoat \n");
        	scanf("%d",&chucNang);
			 if(chucNang == 0 ){
            	goto rv10;
			}else if( chucNang==1){
				goto menu;
			}
        	break;	
	}
	}while(chucNang != 11);
	return 0;
}
