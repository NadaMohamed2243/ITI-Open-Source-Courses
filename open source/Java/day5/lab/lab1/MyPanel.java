/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.mavenproject1;

import java.awt.Color;
import java.awt.Graphics;
import java.util.Date;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.swing.JPanel;

/**
 *
 * @author nadam
 */
public class MyPanel extends JPanel implements Runnable {

    public MyPanel() {
        // Constructor can be used to initialize variables or set up the panel
        this.setBackground(Color.yellow);
        new Thread(this).start();
    }

    @Override
    public void paintComponent(Graphics g) {
        super.paintComponent(g);
        g.drawString(new Date().toLocaleString(), 50, 50);
    }
    
    @Override
    public void run() {
        while (true) {
            try {
                this.repaint();
                Thread.sleep(1000); 
            } catch (InterruptedException e) {
                Logger.getLogger(MyPanel.class.getName()).log(Level.SEVERE,null,e);
            }
        }
    }
}
