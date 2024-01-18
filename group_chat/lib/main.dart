// main.dart

import 'package:flutter/material.dart';
import 'package:firebase_core/firebase_core.dart';
import 'group_chat_screen.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await Firebase.initializeApp();
  runApp(MyApp());
}