import requests
from django.http import JsonResponse


def search_music(request):
    print("API HIT 🔥")

    query = request.GET.get('q')

    url = f"https://www.googleapis.com/youtube/v3/search?part=snippet&q={query}&type=video&maxResults=10&key={API_KEY}"

    response = requests.get(url)
    data = response.json()

    results = []

    for item in data.get('items', []):
        video_id = item.get('id', {}).get('videoId')
        if not video_id:
            continue
            
        results.append({
            "title": item.get('snippet', {}).get('title', 'Unknown Title'),
            "videoId": video_id,
            "thumbnail": item.get('snippet', {}).get('thumbnails', {}).get('medium', {}).get('url', '')
        })

    return JsonResponse(results, safe=False)    