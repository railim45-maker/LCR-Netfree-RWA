import 'package:flutter/material.dart';
import 'package:supabase_flutter/supabase_flutter.dart';
import 'dynamic_section_screen.dart'; // Per accedere alle sezioni dinamiche (privati, aziende, libri, ecc.)

class UserDashboardScreen extends StatelessWidget {
  const UserDashboardScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final supabase = Supabase.instance.client;
    final user = supabase.auth.currentUser;

    return Scaffold(
      appBar: AppBar(
        title: const Text('Area Riservata - NetFree / LCR'),
        actions: [
          IconButton(
            icon: const Icon(Icons.logout),
            tooltip: 'Esci',
            onPressed: () async {
              await supabase.auth.signOut();
              Navigator.of(context).pushReplacementNamed('/login');
            },
          ),
        ],
      ),
      body: ListView(
        padding: const EdgeInsets.all(16.0),
        children: [
          // 1. Card di Benvenuto & Stato Seme
          Card(
            elevation: 4,
            shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
            child: Padding(
              padding: const EdgeInsets.all(16.0),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  const Text(
                    'Benvenuto nel tuo Spazio di Sovranità e Crescita',
                    style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
                  ),
                  const SizedBox(height: 8),
                  Text('Email utente: ${user?.email ?? 'Nospam'}'),
                  const SizedBox(height: 12),
                  const LinearProgressIndicator(value: 0.3),
                  const SizedBox(height: 8),
                  const Text(
                    'Stato: Pergamena firmata ✅ - Seme attivo in coltivazione',
                    style: TextStyle(color: Colors.green, fontWeight: FontWeight.w600),
                  ),
                ],
              ),
            ),
          ),
          const SizedBox(height: 20),

          // 2. IL BLOCCO CHE MANCAVA: Stato del Deposito e del Depuratore con Spillover
          Card(
            elevation: 3,
            shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
            child: Padding(
              padding: const EdgeInsets.all(16.0),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  const Text(
                    'Stato Deposito & Dispositivo (Depuratore)',
                    style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold),
                  ),
                  const SizedBox(height: 12),
                  const Row(
                    children: [
                      Icon(Icons.lock, color: Colors.orange),
                      SizedBox(width: 8),
                      Text('Deposito Cauzionale: Bloccato a garanzia'),
                    ],
                  ),
                  const SizedBox(height: 8),
                  const Row(
                    children: [
                      Icon(Icons.hourglass_empty, color: Colors.blue),
                      SizedBox(width: 8),
                      Text('Attesa acquisto/installazione depuratore'),
                    ],
                  ),
                  const SizedBox(height: 16),
                  const LinearProgressIndicator(value: 0.5, color: Colors.green),
                  const SizedBox(height: 12),
                  const Text(
                    'Matrice del 6 (Spillover Attivo): 2 / 6 Semi posizionati',
                    style: TextStyle(fontWeight: FontWeight.w500),
                  ),
                  const SizedBox(height: 8),
                  ElevatedButton.icon(
                    onPressed: () {
                      // Qui puoi inserire l'azione per procedere all'ordine del depuratore
                    },
                    icon: const Icon(Icons.water_drop),
                    label: const Text('Gestisci Depuratore & Sblocco'),
                  ),
                ],
              ),
            ),
          ),
          const SizedBox(height: 20),

          const Text(
            'Sezioni e Contenuti dell\'Ecosistema',
            style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold),
          ),
          const SizedBox(height: 10),

          // 3. Griglia delle sezioni dinamiche
          _buildMenuTile(
            context,
            title: 'Area Privati e Asset',
            subtitle: 'Soluzioni e tokenizzazione per privati',
            icon: Icons.person,
            category: 'privati',
          ),
          _buildMenuTile(
            context,
            title: 'Area Aziende & RWA',
            subtitle: 'Club deal e finanza decentralizzata',
            icon: Icons.business,
            category: 'aziende',
          ),
          _buildMenuTile(
            context,
            title: 'Terzo Settore & Cerchie di Cura',
            subtitle: 'Modello Net-Free e mutuo soccorso',
            icon: Icons.volunteer_activism,
            category: 'terzo_settore',
          ),
          _buildMenuTile(
            context,
            title: 'Pubblica Amministrazione & PA',
            subtitle: 'Protocolli di conformità e trasparenza',
            icon: Icons.account_balance,
            category: 'pa',
          ),
          _buildMenuTile(
            context,
            title: 'Libri e Documentazione',
            subtitle: 'Manuali di autodeterminazione e formazione',
            icon: Icons.book,
            category: 'libri',
          ),
          _buildMenuTile(
            context,
            title: 'Video & Formazione',
            subtitle: 'Incontri, cerchie e approfondimenti',
            icon: Icons.video_library,
            category: 'video',
          ),
        ],
      ),
    );
  }

  Widget _buildMenuTile(
    BuildContext context, {
    required String title,
    required String subtitle,
    required IconData icon,
    required String category,
  }) {
    return Card(
      margin: const EdgeInsets.symmetric(vertical: 6),
      child: ListTile(
        leading: Icon(icon, color: Colors.blue, size: 30),
        title: Text(title, style: const TextStyle(fontWeight: FontWeight.bold)),
        subtitle: Text(subtitle),
        trailing: const Icon(Icons.arrow_forward_ios, size: 16),
        onTap: () {
          Navigator.push(
            context,
            MaterialPageRoute(
              builder: (context) => DynamicSectionScreen(
                category: category,
                title: title,
              ),
            ),
          );
        },
      ),
    );
  }
}
