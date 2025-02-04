/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.bouncingball;

import java.awt.Color;
import java.awt.Graphics;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.swing.JPanel;

/**
 *
 * @author nadam
 */
public class MyPanel extends JPanel implements Runnable {

    private int x = 0;
    private int y = 0;
    private int xDirection = 5; 
    private int yDirection = -5; 
    public MyPanel() {
        // Constructor can be used to initialize variables or set up the panel
        this.setBackground(Color.yellow);
        new Thread(this).start();
    }

    @Override
    public void paintComponent(Graphics g) {
        super.paintComponent(g);
//        g.drawOval(100, 200, 20, 20);
        if (y == 0) {
            y = this.getHeight() / 2 - 30 / 2;
        }
        g.setColor(Color.RED);
        g.fillOval(x, y , 30, 30);
    }
    
    @Override
    public void run() {
        while (true) {
            try {
                x += xDirection;
                y += yDirection;

      
                if (x <= 0 || x >= this.getWidth() - 30) {
                    xDirection *= -1;
                }
                if (y <= 0 || y >= this.getHeight() - 30) {
                    yDirection *= -1;
                }
                this.repaint();
                Thread.sleep(50); 
            } catch (InterruptedException e) {
                Logger.getLogger(MyPanel.class.getName()).log(Level.SEVERE,null,e);
            }
        }
    }
}
