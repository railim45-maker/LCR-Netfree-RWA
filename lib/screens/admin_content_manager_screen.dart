import 'package:flutter/material.dart';
import 'package:supabase_flutter/supabase_flutter.dart';
import '../models/dynamic_content_model.dart';

class AdminContentManagerScreen extends StatefulWidget {
  const AdminContentManagerScreen({Key? key}) : super(key: key);

  @override
  State<AdminContentManagerScreen> createState() => _AdminContentManagerScreenState();
}

class _AdminContentManagerScreenState extends State<AdminContentManagerScreen> {
  final _supabase = Supabase.instance.client;
  
  // Controller per il form di inserimento nuovo elemento
  final _titleController = TextEditingController();
  final _descController = TextEditingController();
  final _urlController = TextEditingController();
  String _selectedCategory = 'privati'; // Default category

  final List<String> _categories = [
    'privati',
    'aziende',
    'terzo_settore',
    'pa',
    'libri',
    'video',
    'documenti',
    'altro'
  ];

  @override
  void dispose() {
    _titleController.dispose();
    _descController.dispose();
    _urlController.dispose();
    super.dispose();
  }

  Future<void> _addNewContent() async {
    if (_titleController.text.trim().isEmpty) {
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('Il titolo è obbligatorio')),
      );
      return;
    }

    try {
      await _supabase.from('dynamic_admin_contents').insert({
        'category': _selectedCategory,
        'title': _titleController.text.trim(),
        'description': _descController.text.trim(),
        'content_url': _urlController.text.trim().isEmpty ? null : _urlController.text.trim(),
        'is_active': true,
      });

      _titleController.clear();
      _descController.clear();
      _urlController.clear();

      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('Contenuto aggiunto con successo! Aggiornato in tempo reale.')),
      );
    } catch (e) {
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text('Errore durante l\'inserimento: $e')),
      );
    }
  }

  Future<void> _deleteContent(String id) async {
    try {
      await _supabase.from('dynamic_admin_contents').delete().eq('id', id);
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('Contenuto rimosso')),
      );
    } catch (e) {
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text('Errore: $e')),
      );
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Gestione Dinamica Contenuti & Asset'),
      ),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            // Sezione Form Inserimento Admin
            Card(
              elevation: 3,
              child: Padding(
                padding: const EdgeInsets.all(16.0),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.stretch,
                  children: [
                    const Text(
                      'Aggiungi Nuovo Materiale / Asset / Sezione',
                      style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold),
                    ),
                    const SizedBox(height: 12),
                    DropdownButtonFormField<String>(
                      value: _selectedCategory,
                      items: _categories.map((cat) {
                        return DropdownMenuItem(
                          value: cat,
                          child: Text(cat.toUpperCase()),
                        );
                      }).toList,
                      onChanged: (val) {
                        if (val != null) setState(() => _selectedCategory = val);
                      },
                      decoration: const InputDecoration(labelText: 'Categoria / Ambito'),
                    ),
                    const SizedBox(height: 8),
                    TextField(
                      controller: _titleController,
                      decoration: const InputDecoration(labelText: 'Titolo (es. Asset Tokenizzabile X, Libro Y)'),
                    ),
                    const SizedBox(height: 8),
                    TextField(
                      controller: _descController,
                      decoration: const InputDecoration(labelText: 'Descrizione o Dettagli'),
                      maxLines: 2,
                    ),
                    const SizedBox(height: 8),
                    TextField(
                      controller: _urlController,
                      decoration: const InputDecoration(labelText: 'Link URL (Video, Documento, Risorsa Esterna)'),
                    ),
                    const SizedBox(height: 16),
                    ElevatedButton.icon(
                      onPressed: _addNewContent,
                      icon: const Icon(Icons.add),
                      label: const Text('Pubblica e Aggiorna Sito'),
                    ),
                  ],
                ),
              ),
            ),
            const SizedBox(height: 20),
            const Text(
              'Materiali Attivi nel Sistema (Real-time):',
              style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold),
            ),
            const SizedBox(height: 8),
            // Lista Reattiva in tempo reale da Supabase
            Expanded(
              child: StreamBuilder<List<Map<String, dynamic>>>(
                stream: _supabase
                    .from('dynamic_admin_contents')
                    .stream(primaryKey: ['id'])
                    .order('created_at', ascending: false),
                builder: (context, snapshot) {
                  if (snapshot.connectionState == ConnectionState.waiting) {
                    return const Center(child: CircularProgressIndicator());
                  }
                  if (!snapshot.hasData || snapshot.data!.isEmpty) {
                    return const Center(child: Text('Nessun contenuto dinamico inserito.'));
                  }

                  final items = snapshot.data!;

                  return ListView.builder(
                    itemCount: items.length,
                    itemBuilder: (context, index) {
                      final item = items[index];
                      final content = DynamicContentModel.fromJson(item);

                      return Card(
                        margin: const EdgeInsets.symmetric(vertical: 4),
                        child: ListTile(
                          title: Text(content.title, style: const TextStyle(fontWeight: FontWeight.bold)),
                          subtitle: Text('[${content.category.toUpperCase()}] ${content.description ?? ''}'),
                          trailing: IconButton(
                            icon: const Icon(Icons.delete, color: Colors.red),
                            onPressed: () => _deleteContent(content.id),
                          ),
                        ),
                      );
                    },
                  );
                },
              ),
            ),
          ],
        ),
      ),
    );
  }
}
