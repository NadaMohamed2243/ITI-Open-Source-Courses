/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.textmarquee;

import java.awt.Color;
import java.awt.Graphics;
import javax.swing.JPanel;

/**
 *
 * @author nadam
 */
public class MyPanel extends JPanel {

    private int x = 30;
    public MyPanel() {
        // Constructor can be used to initialize variables or set up the panel
        this.setBackground(Color.yellow);
//        new Thread(this).start();
    }

    @Override
    public void paintComponent(Graphics g) {
        super.paintComponent(g);
        g.drawString("Hello, I am Nada", x, (this.getHeight()/2));
    }
    
    public void updateX() {
        x += 5;
        if (x >= this.getWidth()) {
            x = 0;
        }
        repaint();
    }
    
//    @Override
//    public void run() {
//        while (true) {
//            try {
//                x+=5;
//                if(x>=this.getWidth()) x=0;
//                this.repaint();
//                Thread.sleep(100); 
//            } catch (InterruptedException e) {
//                Logger.getLogger(MyPanel.class.getName()).log(Level.SEVERE,null,e);
//            }
//        }
//    }
}