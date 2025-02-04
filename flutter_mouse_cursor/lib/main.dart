import 'package:flutter/material.dart';

void main() {
  runApp(const MainApp());
}

class MainApp extends StatelessWidget {
  const MainApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        body: SafeArea(
          child: Padding(
            padding: EdgeInsets.all(6),
            child: Wrap(
              spacing: 6,
              runSpacing: 6,
              children: [
                OutlinedButton(
                  child: Text('Test Button'),
                  onPressed: () {},
                ),
                MouseRegion(
                  cursor: SystemMouseCursors.click,
                  child: Container(
                    alignment: Alignment.center,
                    width: 150,
                    height: 150,
                    decoration: BoxDecoration(
                      color: Colors.blue.shade50,
                      border: Border.all(color: Colors.black),
                    ),
                    child: Text('Mouse cursor test'),
                  ),
                )
              ],
            ),
          ),
        ),
      ),
    );
  }
}
