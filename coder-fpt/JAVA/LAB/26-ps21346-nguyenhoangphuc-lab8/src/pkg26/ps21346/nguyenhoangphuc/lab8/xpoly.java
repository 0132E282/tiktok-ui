
package pkg26.ps21346.nguyenhoangphuc.lab8;

import java.util.ArrayList;
import java.util.Comparator;

/**
 *
 * @author nguye
 */
 public class xpoly {
    final static double sum(double ... b){ 
        double tong = 0;
        for(double a : b){
          tong+=a;   
        }
        return tong;
    }
    final static double max(double ...a){
        double max=a[0];
        for(double c : a){
            if(max < c){
             max = c;   
            }
        }
        return max;   
    }
    final static double min(double ... a){
        double min = a[0];
        for(double x : a){
         if(min > x ){   
            min = x;   
         }
        }
        return min;
    }
    final static double tongLe(double ... x){
        double tong=0;
        for(double a:x){
            if(a %2 != 0){
                tong +=a;
            }
        }
        return tong;
    }
    final static String topUper(String x){
        String name=null;
        String a[]= x.split(" ");
        for(int i=0 ; i < a.length;i++){
            char fistChar = a[i].charAt(0);
            char upperFiestChar = String.valueOf(fistChar).toUpperCase().charAt(0);
            a[i]=upperFiestChar+a[i].substring(1);
            name = String.join(" ", a);
        }
        return name;
    }
}
 
