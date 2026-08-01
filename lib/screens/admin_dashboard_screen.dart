ElevatedButton.icon(
  onPressed: () {
    Navigator.push(
      context,
      MaterialPageRoute(
        builder: (context) => const DynamicSectionScreen(
          category: 'privati', // Qui puoi mettere 'privati', 'aziende', 'libri', ecc.
          title: 'Area Privati e Asset',
        ),
      ),
    );
  },
  icon: const Icon(Icons.folder_open),
  label: const Text('Apri Sezione Dinamica (Privati)'),
),
