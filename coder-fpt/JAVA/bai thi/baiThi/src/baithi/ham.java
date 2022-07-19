
package baithi;

public   class ham {
    final static double tongChiHetChoChin(double ... x){
        double tong=0;
        for(int i =0 ; i<x.length;i++){
            if(x[i]% 9 ==0){
                tong += x[i];
            }
        }
        return tong;
    }
    final static double tbCHiHetChoBa(double ...x){
     double tong =0;
     int diem=0;
     for(int i= 0;i<x.length;i++){
        if(x[i]%3!=0){   
         diem ++;
         tong +=x[i];
        }
     }
     return tong/diem;
    }
}
