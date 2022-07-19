
package javaapplication25;

import java.util.Scanner;

public class JavaApplication25 {
    static Scanner input = new Scanner(System.in);
    static ham h = new ham();
    public static void main(String[] args) {
//        int n = Integer.parseInt(input.nextLine());
//        String arr [] = new String[n];
//        for(int i=0 ; i<n ; i++){
//             arr[i] = input.nextLine();
//        }
        System.out.println("chuoi dai ngan nhat :"+h.chuoi("nguyen", "hoan"));
    }

}
