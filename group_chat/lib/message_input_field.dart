// message_input_field.dart

import 'package:flutter/material.dart';

class MessageInputField extends StatelessWidget {
  final TextEditingController controller;
  final void Function() onSendMessage;

  MessageInputField({
    required this.controller,
    required this.onSendMessage,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: EdgeInsets.all(8.0),
      child: Row(
        children: [
          Expanded(
            child: TextField(
              controller: controller,
              decoration: InputDecoration(labelText: 'Type a message'),
            ),
          ),
          IconButton(
            icon: Icon(Icons.send),
            onPressed: onSendMessage,
          ),
        ],
      ),
    );
  }
}
