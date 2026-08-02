import 'package:flutter/material.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

class GreenSharingScreen extends StatefulWidget {
  const GreenSharingScreen({Key? key}) : super(key: key);

  @override
  State<GreenSharingScreen> createState() => _GreenSharingScreenState();
}

class _GreenSharingScreenState extends State<GreenSharingScreen> {
  final _supabase = Supabase.instance.client;
  bool _isSubmitted = false;
  
  final _podController = TextEditingController();
  final _pdrController = TextEditingController();

  @override
  void dispose() {
    _podController.dispose();
    _pdrController.dispose();
    super.dispose();
  }

  Future<void> _submitUtenze() async {
    try {
      final user = _supabase.auth.currentUser;
      if (user == null) return;

      // Salvataggio dei dati delle utenze per l'attivazione del Green Sharing
      await _supabase.from('documents').insert({
        'user_id': user.id,
        'document_type': 'green_sharing_utenze',
        'status': 'pending',
        'metadata': {
          'pod': _podController.text.trim(),
          'pdr': _pdrController.text.trim(),
        }
      });

      setState(() => _isSubmitted = true);
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('Utenze registrate con successo per l\'alleggerimento.')),
      );
    } catch (e) {
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text('Errore durante la registrazione: $e')),
      );
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Fase 1: Green Sharing & Utenze'),
      ),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: ListView(
          children: [
            const Card(
              elevation: 3,
              child: Padding(
                padding: EdgeInsets.all(16.0),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      'Il Primo Respiro: Alleggerimento Domestico',
                      style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
                    ),
                    SizedBox(height: 8),
                    Text(
                      'Attraverso le comunità energetiche rinnovabili, azzeriamo i costi superflui fin dal primo mese, generando un risparmio stimato fino a 1.488 € all\'anno per utenza e attivando i flussi della community.',
                      style: TextStyle(color: Colors.black87),
                    ),
                  ],
                ),
              ),
            ),
            const SizedBox(height: 20),
            if (_isSubmitted)
              const Center(
                child: Padding(
                  padding: EdgeInsets.all(20.0),
                  child: Text(
                    'Utenze prese in carico con successo ✅\nIl sistema sta elaborando il tuo alleggerimento.',
                    textAlign: TextAlign.center,
                    style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold, color: Colors.green),
                  ),
                ),
              )
            else
              Column(
                crossAxisAlignment: CrossAxisAlignment.stretch,
                children: [
                  const Text(
                    'Inserisci i dati delle tue bollette (Luce / Gas):',
                    style: TextStyle(fontWeight: FontWeight.bold),
                  ),
                  const SizedBox(height: 12),
                  TextField(
                    controller: _podController,
                    decoration: const InputDecoration(
                      labelText: 'Codice POD (Luce)',
                      border: OutlineInputBorder(),
                    ),
                  ),
                  const SizedBox(height: 12),
                  TextField(
                    controller: _pdrController,
                    decoration: const InputDecoration(
                      labelText: 'Codice PDR (Gas)',
                      border: OutlineInputBorder(),
                    ),
                  ),
                  const SizedBox(height: 20),
                  ElevatedButton.icon(
                    onPressed: _submitUtenze,
                    icon: const Icon(Icons.bolt),
                    label: const Text('Attiva Green Sharing & Risparmio'),
                    style: ElevatedButton.styleFrom(padding: const EdgeInsets.symmetric(vertical: 14)),
                  ),
                ],
              ),
          ],
        ),
      ),
    );
  }
}
