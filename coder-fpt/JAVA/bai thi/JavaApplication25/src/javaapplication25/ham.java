
package javaapplication25;


public class ham {
    final String chuoi(String ... a){
     String n = a[0];
     for(int i =0;i < a.length;i++){
        if(n.length() < a.hashCode()){
            n=a[i];
        }
     }
     return n;
    }
}
