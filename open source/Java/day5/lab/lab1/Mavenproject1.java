/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 */

package com.mycompany.mavenproject1;
import javax.swing.JFrame;
/**
 *
 * @author nadam
 */
public class Mavenproject1 {

    public static void main(String[] args) {
        JFrame f = new JFrame("date lab1");
        MyPanel myPanel = new MyPanel();
        f.setContentPane(myPanel);
        f.setSize(400, 300);
        f.setVisible(true);
    }
    
}
