import 'package:flutter/material.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

class DynamicSectionScreen extends StatelessWidget {
  final String category;
  final String title;

  const DynamicSectionScreen({
    Key? key,
    required this.category,
    required this.title,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final supabase = Supabase.instance.client;

    return Scaffold(
      appBar: AppBar(
        title: Text(title),
      ),
      body: StreamBuilder<List<Map<String, dynamic>>>(
        stream: supabase
            .from('dynamic_admin_contents')
            .stream(primaryKey: ['id'])
            .eq('category', category)
            .eq('is_active', true)
            .order('created_at', ascending: false),
        builder: (context, snapshot) {
          if (snapshot.connectionState == ConnectionState.waiting) {
            return const Center(child: CircularProgressIndicator());
          }
          if (!snapshot.hasData || snapshot.data!.isEmpty) {
            return Center(
              child: Text('Nessun contenuto disponibile per $title al momento.'),
            );
          }

          final items = snapshot.data!;

          return ListView.builder(
            padding: const EdgeInsets.all(16.0),
            itemCount: items.length,
            itemBuilder: (context, index) {
              final item = items[index];
              return Card(
                margin: const EdgeInsets.symmetric(vertical: 6),
                child: ListTile(
                  title: Text(
                    item['title'] ?? '',
                    style: const TextStyle(fontWeight: FontWeight.bold),
                  ),
                  subtitle: Text(item['description'] ?? ''),
                  trailing: item['content_url'] != null
                      ? const Icon(Icons.open_in_new, color: Colors.blue)
                      : null,
                  onTap: () {
                    // Se c'è un link (video, documento, ecc.), puoi gestirne l'apertura qui
                  },
                ),
              );
            },
          );
        },
      ),
    );
  }
}
