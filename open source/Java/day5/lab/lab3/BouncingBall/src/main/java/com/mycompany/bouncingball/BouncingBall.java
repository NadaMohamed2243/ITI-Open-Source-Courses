/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 */

package com.mycompany.bouncingball;

import javax.swing.JFrame;

/**
 *
 * @author nadam
 */
public class BouncingBall {

    public static void main(String[] args) {
        JFrame f = new JFrame("bouncing ball lab3");
        MyPanel myPanel = new MyPanel();
        f.setContentPane(myPanel);
        f.setSize(400, 300);
        f.setVisible(true);
    }
}
