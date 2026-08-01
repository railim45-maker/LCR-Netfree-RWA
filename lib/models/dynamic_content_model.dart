class DynamicContentModel {
  final String id;
  final String category;
  final String title;
  final String? description;
  final String? contentUrl;
  final Map<String, dynamic> metadata;
  final bool isActive;
  final DateTime createdAt;

  DynamicContentModel({
    required this.id,
    required this.category,
    required this.title,
    this.description,
    this.contentUrl,
    required this.metadata,
    required this.isActive,
    required this.createdAt,
  });

  factory DynamicContentModel.fromJson(Map<String, dynamic> json) {
    return DynamicContentModel(
      id: json['id'] ?? '',
      category: json['category'] ?? '',
      title: json['title'] ?? '',
      description: json['description'],
      contentUrl: json['content_url'],
      metadata: json['metadata'] ?? {},
      isActive: json['is_active'] ?? true,
      createdAt: DateTime.parse(json['created_at']),
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'category': category,
      'title': title,
      'description': description,
      'content_url': contentUrl,
      'metadata': metadata,
      'is_active': isActive,
    };
  }
}
