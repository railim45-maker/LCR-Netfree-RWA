import 'package:flutter/material.dart';
import 'dynamic_section_screen.dart';

class CategoriesMenuScreen extends StatelessWidget {
  const CategoriesMenuScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final categories = [
      {'key': 'privati', 'title': 'Privati', 'icon': Icons.person},
      {'key': 'aziende', 'title': 'Aziende', 'icon': Icons.business},
      {'key': 'terzo_settore', 'title': 'Terzo Settore', 'icon': Icons.volunteer_activism},
      {'key': 'pa', 'title': 'Pubblica Amministrazione', 'icon': Icons.account_balance},
      {'key': 'libri', 'title': 'Libri', 'icon': Icons.book},
      {'key': 'video', 'title': 'Video', 'icon': Icons.video_library},
      {'key': 'documenti', 'title': 'Documenti', 'icon': Icons.description},
    ];

    return Scaffold(
      appBar: AppBar(
        title: const Text('Aree e Contenuti Dinamici'),
      ),
      body: ListView.builder(
        padding: const EdgeInsets.all(16),
        itemCount: categories.length,
        itemBuilder: (context, index) {
          final cat = categories[index];
          return Card(
            margin: const EdgeInsets.symmetric(vertical: 8),
            child: ListTile(
              leading: Icon(cat['icon'] as IconData, color: Colors.blue),
              title: Text(cat['title'] as String, style: const TextStyle(fontWeight: FontWeight.bold)),
              trailing: const Icon(Icons.arrow_forward_ios, size: 16),
              onTap: () {
                Navigator.push(
                  context,
                  MaterialPageRoute(
                    builder: (context) => DynamicSectionScreen(
                      category: cat['key'] as String,
                      title: cat['title'] as String,
                    ),
                  ),
                );
              },
            ),
          );
        },
      ),
    );
  }
}
