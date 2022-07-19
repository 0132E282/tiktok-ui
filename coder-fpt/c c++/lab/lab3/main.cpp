#include <stdio.h>
#include <math.h>
/* run this program using the console pauser or add your own getch, system("pause") or input loop */

int main() {
	double diem;
	float a,b,c,x,x1,x2,delta;
	int bai,bac ;
	 printf("(1)bai 1 xay dung phuong trinh hoc luc\n");
	 printf("(2)bai 2 xay dung phuong trinh\n");
	 printf("(3)bai 3 xay dung chuong trinh tich dien\n");
	 printf(" xin moi nhap bai ban muon xem:");
	 scanf("%d",&bai);
	 switch(bai){
	 	case 1:
	 			//bai 1
		printf("=================================\n");
       	printf(" xay dung  chuong trinh tinh hoc luc \n ");
    	printf("xin moi nhap diem :");
       	scanf("%lf",&diem);
        if (diem >=9 && diem <=10){
		   printf("diem=%lf :hoc luc xuat sac  \n",diem);
        }else if (diem>=8 &&  diem<=10){
         	printf("diem=%lf :hoc sinh gioi  \n ",diem);
       	}else if(diem >= 6.5 &&  diem<=10){
	       	printf(" diem=%lf :hoc luc kha  \n",diem);
       	}else if(diem>=5 &&  diem<=10){
	       	printf("diem=%lf :hoc luc trung binh  \n",diem);
        }else if(diem<5 && diem<=10){
	    	printf(" diem=%lf :hoc luc yeu  \n ",diem);
       	}else{
	      	printf("loi ban khong nhap dung so diem moi nhap lai ");
       	}
       	break;
                // end bai 1
        case 2 :
   		printf("=================================\n");
        printf("(1)bai 2.1 xay dung phuong trinh ax+b=0\n");
        printf("(2)bai 2.2 xay dung phuong trinh ax^2+b+c=0\n");
        printf("nhap bai ban muon xem:");
        scanf("%d",&bai);
        switch(bai){
        	case 1 :
        		printf("xay dung phuong trinh ax+b=0\n");
        		printf("xin moi nhap vao a:");
        		scanf("%f",&a);
        		printf("xin moi nhap b:");
        		scanf("%f",&b);
        		if( a== 0){
        			if(b == 0){
        				printf("phuong trinh vo so nghiem\n");
					}else{
						printf("phuong trinh vo nhhiem\n");
					}
				}else{
					x=-b/a;
					printf("nghiem phuong trinh la %f\n",x);
				}
			 break;
  		    case 2:
  		    	printf("=================================\n");
  		    	printf("xay dung phuong trinh co nghiem ax^2 + bx +c=0\n");
    		    printf("xin moi nhap a:");
    		    scanf(" %f",&a);
    		    printf("xin moi nhap b:");
    		    scanf("%f",&b);
    		    printf("xin moi nhap c:");
   		    	scanf(" %f",&c);
   		    	if(a ==0){
   		    		printf("phuong trinh co nghiem bx+c=0\n");
   		    		x=-c/b;
   		    		printf("phuong trinh co nghiem la %f\n",x);
				   }else{
				   	 delta=b*b-4*a*c;
				   	 if(delta<0){
				   	 	printf("phuong trinh vo nghiem\n");
						}else if( delta ==0){
							printf("phuong trinh co nghiem kep\n");
							x1=x2=-b/2*a;
							printf("phuong trinh co nghiem x1= %f x2=%f\n ",x1 ,x2);
						}else{
							printf("phuong trinh co 2 nghiem phan biet\n");
							x1=(-b+sqrt(delta))/(2*a);
							x2=(-b-sqrt(delta))/(2*a);
							printf("nghiem cua x1:%f\n nghiem cua x2:%f\n ",x1,x2);
						}
				   }
				   
		}
		break;
		case 3:
			printf("=================================\n");
			printf("xay dung chuong trinh tinh tien dien\n");
			printf("bac 1 cho tu 0-50 so kwh su dung\n");
			printf("bac 2 cho tu 51-100 so kwh su dung\n");
			printf("bac 3 cho tu 101-200 so kwh su dung\n");
			printf("bac 4 cho tu 201-300 so kwh su dung\n");
			printf("bac 5 cho tu  301-400 so kwh su dung\n");
			printf("bac 6 cho tu 401 tro len so kwh su dung\n");
			printf("xin moi nhap so bac muon xem \n bac:");
			scanf("%d",&bac);
			switch(bac){
				case 1:
			    	printf("=================================\n");
			    	printf("0-50 so kwh su dung\n");
				   printf(" gia dien 1.678 dong/kwh\n");
				   break;
				case 2:
		     		printf("=================================\n");
		     		printf("bac 2 cho tu 51-100 so kwh su dung\n");
				   printf(" gia dien 1.734 dong/kwh\n");
				   break;
				case 3:
					printf("=================================\n");
					printf("101-200 so kwh su dung\n");
				   printf(" gia dien 2.014 dong/kwh\n");
				   break;
				case 4:
					printf("=================================\n");
					printf("201-300 so kwh su dung\n");
				   printf(" gia dien  2.536 dong/kwh\n");
				   break;
				case 5:
						printf("=================================\n");
						printf("301-400 so kwh su dung\n");
				   printf(" gia dien 2.834 dong/kwh\n");
				   break;
				case 6:
						printf("=================================\n");
						printf("401 tro len so kwh su dung\n");
				   printf(" gia dien 2.927 dong/kwh\n");
						break;			
			}
   	 }
	return 0;
}
