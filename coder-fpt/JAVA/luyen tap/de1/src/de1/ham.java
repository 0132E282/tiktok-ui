
package de1;
public class ham {
    
    static void hamTongChan(int arr[]){   
        int tong=0;
        for(int i : arr){
            if(i%2==0){
            tong += i;
            }
        }
        System.out.println("tong cac số chăn :"+tong);
    }
       static void hamTongLe(int arr[]){   
        int tong=0;
        for(int i : arr){
            if(i%2 !=0){
            tong += i;
            }
        }
        System.out.println("tong cac số chăn :"+tong);
    }
}
