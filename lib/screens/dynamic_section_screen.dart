import 'package:flutter/material.dart';
// 1. IMPORTA QUI IL FILE IN CIMA ALLA TUA SCHERMATA:
import 'dynamic_section_screen.dart';

// Esempio di utilizzo all'interno di un metodo build o di una lista di pulsanti:
Column(
  crossAxisAlignment: CrossAxisAlignment.stretch,
  children: [
    ElevatedButton.icon(
      onPressed: () {
        Navigator.push(
          context,
          MaterialPageRoute(
            builder: (context) => const DynamicSectionScreen(
              category: 'privati',
              title: 'Area Privati e Asset',
            ),
          ),
        );
      },
      icon: const Icon(Icons.person),
      label: const Text('Area Privati'),
    ),
    const SizedBox(height: 10),
    ElevatedButton.icon(
      onPressed: () {
        Navigator.push(
          context,
          MaterialPageRoute(
            builder: (context) => const DynamicSectionScreen(
              category: 'aziende',
              title: 'Area Aziende',
            ),
          ),
        );
      },
      icon: const Icon(Icons.business),
      label: const Text('Area Aziende'),
    ),
    const SizedBox(height: 10),
    ElevatedButton.icon(
      onPressed: () {
        Navigator.push(
          context,
          MaterialPageRoute(
            builder: (context) => const DynamicSectionScreen(
              category: 'terzo_settore',
              title: 'Terzo Settore',
            ),
          ),
        );
      },
      icon: const Icon(Icons.volunteer_activism),
      label: const Text('Terzo Settore'),
    ),
    const SizedBox(height: 10),
    ElevatedButton.icon(
      onPressed: () {
        Navigator.push(
          context,
          MaterialPageRoute(
            builder: (context) => const DynamicSectionScreen(
              category: 'pa',
              title: 'Pubblica Amministrazione',
            ),
          ),
        );
      },
      icon: const Icon(Icons.account_balance),
      label: const Text('Pubblica Amministrazione'),
    ),
    const SizedBox(height: 10),
    ElevatedButton.icon(
      onPressed: () {
        Navigator.push(
          context,
          MaterialPageRoute(
            builder: (context) => const DynamicSectionScreen(
              category: 'libri',
              title: 'Libri e Documentazione',
            ),
          ),
        );
      },
      icon: const Icon(Icons.book),
      label: const Text('Libri'),
    ),
  ],
)
