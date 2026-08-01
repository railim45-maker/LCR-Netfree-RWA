// All'interno della tua AdminDashboardScreen, dove hai i pulsanti di controllo:
ElevatedButton.icon(
  onPressed: () {
    Navigator.push(
      context,
      MaterialPageRoute(
        builder: (context) => const AdminContentManagerScreen(),
      ),
    );
  },
  icon: const Icon(Icons.dynamic_feed),
  label: const Text('Gestione Contenuti & Asset Dinamici'),
),
