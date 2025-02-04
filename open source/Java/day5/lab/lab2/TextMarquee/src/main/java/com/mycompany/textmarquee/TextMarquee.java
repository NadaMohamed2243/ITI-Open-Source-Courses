/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 */

package com.mycompany.textmarquee;

import java.util.logging.Level;
import java.util.logging.Logger;
import javax.swing.JFrame;
/**
 *
 * @author nadam
 */
public class TextMarquee {

    public static void main(String[] args) {
        JFrame f = new JFrame("TextMarquee lab2");
        MyPanel myPanel = new MyPanel();
        f.setContentPane(myPanel);
        
        //anonymous class
//        new Thread(new Runnable() {
//            @Override
//            public void run() {
//                while (true) {
//                    try {
//                        myPanel.updateX();
//                        Thread.sleep(100);
//                    } catch (InterruptedException e) {
//                        Logger.getLogger(MyPanel.class.getName()).log(Level.SEVERE, null, e);
//                    }
//                }
//            }
//        }).start();

          //lambda exepression
          new Thread(() -> {
              while (true) {
                  try {
                      myPanel.updateX();
                      Thread.sleep(100);
                  } catch (InterruptedException e) {
                      Logger.getLogger(MyPanel.class.getName()).log(Level.SEVERE, null, e);
                  }
              }
        }).start();
        f.setSize(400, 300);
        f.setVisible(true);
    }
}
