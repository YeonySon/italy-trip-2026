// 기본 여행 데이터. 앱에서 고친 내용은 기기 안(localStorage)에 따로 저장됩니다.
window.DEFAULT_DATA = {
 "version": 1,
 "baseRev": 1,
 "trip": {
  "title": "이탈리아 여행",
  "start": "2026-12-21",
  "end": "2026-12-30",
  "summary": "로마로 들어가 로마에서 나오는 일정입니다. 도시 간 이동은 기차, 시내는 대중교통과 도보로 다닙니다. 크리스마스 이브와 성탄절은 피렌체에서 보내고, 12/26에 기차로 1시간 거리인 피사에 다녀옵니다. 베네치아를 본 뒤 출국 전날 로마로 돌아와 하룻밤 자고 공항으로 갑니다.",
  "assume": "가정한 조건: 성인 2명, 중간 예산, 12/21 저녁 피우미치노(FCO) 도착, 12/30 저녁 8시경 출발편. 항공 시간이 다르면 첫날과 마지막 날 시간만 옮기면 됩니다. 모든 정보는 2026년 11월 4일 기준이고, 연말 특별 운영시간은 대부분 12월 초에 발표되니 출발 전 한 번 더 확인하세요."
 },
 "cities": {
  "roma": {
   "name": "로마"
  },
  "firenze": {
   "name": "피렌체"
  },
  "pisa": {
   "name": "피사"
  },
  "venezia": {
   "name": "베네치아"
  }
 },
 "route": [
  {
   "id": "r1",
   "city": "roma",
   "name": "로마",
   "nights": "3박 · 12/21–24",
   "leg": "→ 기차 약 1시간 35분"
  },
  {
   "id": "r2",
   "city": "firenze",
   "name": "피렌체",
   "nights": "3박 · 12/24–27 · 12/26 피사 당일",
   "leg": "→ 기차 약 2시간 5분"
  },
  {
   "id": "r3",
   "city": "venezia",
   "name": "베네치아",
   "nights": "2박 · 12/27–29",
   "leg": "→ 기차 약 3시간 45분"
  },
  {
   "id": "r4",
   "city": "roma",
   "name": "로마",
   "nights": "1박 · 12/29–30",
   "leg": "→ 공항철도 32분"
  },
  {
   "id": "r5",
   "city": "roma",
   "name": "로마 FCO",
   "nights": "출국 · 12/30",
   "leg": "국제선 3–3.5시간 전 도착"
  }
 ],
 "days": [
  {
   "id": "d6",
   "date": "2026-12-21",
   "city": "roma",
   "label": "",
   "title": "도착, 테르미니 근처 체크인",
   "items": [
    {
     "id": "i7",
     "time": "저녁",
     "text": "피우미치노(FCO) 도착. 입국 심사에서 EES(EU 출입국 시스템) 첫 등록으로 지문과 얼굴을 찍습니다. 한국 전자여권은 e-gate를 쓸 수 있지만 줄이 길 수 있습니다.",
     "tags": []
    },
    {
     "id": "i8",
     "time": "+1h",
     "text": "레오나르도 익스프레스로 로마 테르미니까지 32분, €14. 개찰구에 컨택리스 카드를 대면 바로 결제됩니다. 카드 1장에 1명만 결제되니 2명이면 카드 2장이 필요합니다.",
     "tags": []
    },
    {
     "id": "i9",
     "time": "도착 후",
     "text": "테르미니역에서 호텔까지 도보 5–10분(레푸블리카 쪽).",
     "tags": []
    },
    {
     "id": "ia",
     "time": "21:00",
     "text": "가벼운 저녁: 몬티의 <b>Trieste Pizza</b>(구글 4.7) 로마식 피자. 호텔에서 걸어서 12–15분이고 월요일에도 22:30까지 엽니다. 늦게 도착하면 호텔 근처에서 간단히 드세요.",
     "tags": []
    }
   ],
   "notes": [
    {
     "id": "nb",
     "kind": "warn",
     "html": "<b>막차와 택시.</b> 공항 출발 레오나르도 막차는 23:27(공항철도 공식 기준)입니다. 놓치면 공식 흰색 택시를 타세요. 성벽 안까지 정액 €55입니다. 도착층에서 호객하는 기사는 무허가일 수 있습니다."
    }
   ]
  },
  {
   "id": "dc",
   "date": "2026-12-22",
   "city": "roma",
   "label": "",
   "title": "바티칸과 나보나 광장",
   "items": [
    {
     "id": "id",
     "time": "07:40",
     "text": "메트로 A선 Ottaviano 또는 Cipro역 하차. A선과 64번 버스는 소매치기가 많습니다.",
     "tags": []
    },
    {
     "id": "ie",
     "time": "08:00",
     "text": "바티칸 박물관과 시스티나 예배당 €25(예약비 포함). 2026년 공식 달력상 이날은 08–20시(최종 입장 18시) 정상 운영입니다. 어깨와 무릎을 가리는 옷을 입으세요. 약 3시간.",
     "tags": [
      [
       "book",
       "예약"
      ]
     ]
    },
    {
     "id": "if",
     "time": "11:30",
     "text": "점심: <b>Pastasciutta</b>(Via delle Grazie, 구글 4.7)의 생면 파스타 한 접시 약 €5–8. 예약을 받지 않고 좌석이 적어 포장해도 됩니다.",
     "tags": []
    },
    {
     "id": "ig",
     "time": "13:00",
     "text": "성 베드로 대성당(무료, 겨울 07–19시, 보안 줄 30–40분). 쿠폴라(돔)는 현장 계단 €10, 엘리베이터 €15이고 엘리베이터를 타도 320계단을 더 오릅니다. 쿠폴라는 겨울에 17시에 닫으니 15시 전에 오르세요.",
     "tags": []
    },
    {
     "id": "ih",
     "time": "15:30",
     "text": "산탄젤로 다리를 건너 나보나 광장 크리스마스 마켓(2025년 기준 12/1–1/6). 간식은 <b>Two Sizes</b> 티라미수(4.7)나 라르고 아르젠티나의 <b>Pizza Florida</b> 조각 피자(4.8). 젤라토는 <b>Gelateria del Teatro</b>(4.6).",
     "tags": []
    },
    {
     "id": "ii",
     "time": "19:30",
     "text": "저녁: 판테온 옆 <b>La Sagrestia</b>(구글 4.7) 카르보나라, 살팀보카, 피자.",
     "tags": [
      [
       "book",
       "전화 예약"
      ]
     ]
    },
    {
     "id": "ij",
     "time": "21:15",
     "text": "판테온 야경.",
     "tags": []
    },
    {
     "id": "ik",
     "time": "22:00",
     "text": "트레비 분수. 수조 앞 유료 구역은 최종 입장이 21:00이고 22시부터는 무료로 들어갈 수 있습니다.",
     "tags": []
    }
   ],
   "notes": []
  },
  {
   "id": "dl",
   "date": "2026-12-23",
   "city": "roma",
   "label": "",
   "title": "콜로세움, 포로 로마노, 트라스테베레",
   "items": [
    {
     "id": "im",
     "time": "08:30",
     "text": "콜로세움 Full Experience(아레나 또는 지하) €24. 실명 티켓이라 여권을 챙기고 10분 일찍 도착하세요. 메트로 B·C선 Colosseo역. 겨울 최종 입장은 15:30입니다.",
     "tags": [
      [
       "book",
       "예약"
      ]
     ]
    },
    {
     "id": "in",
     "time": "10:30",
     "text": "같은 티켓으로 포로 로마노와 팔라티노 언덕. 겨울에는 16:30에 닫고 최종 입장은 15:30입니다.",
     "tags": []
    },
    {
     "id": "io",
     "time": "13:00",
     "text": "점심: 몬티의 <b>al42 by Pasta Chef</b>(구글 4.7) 카르보나라와 아마트리차나. 예약을 받지 않아 줄을 섭니다. 대안은 빵과 조각 피자가 있는 <b>Antico Forno Serpenti</b>(4.6).",
     "tags": []
    },
    {
     "id": "ip",
     "time": "14:30",
     "text": "젤라토 <b>Gelateria dell'Angeletto</b>(몬티, 4.7)를 먹고 캄피돌리오 언덕 전망대에서 포로 로마노를 내려다봅니다.",
     "tags": []
    },
    {
     "id": "iq",
     "time": "16:30",
     "text": "테베레강을 건너 트라스테베레로. 해가 16:40경 지고 골목 조명이 켜집니다.",
     "tags": []
    },
    {
     "id": "ir",
     "time": "18:30",
     "text": "저녁: <b>Tonnarello</b>(구글 4.7, 리뷰 11만)의 토나렐리 카초 에 페페와 카르보나라. 예약을 받지 않아 19시 전에 가야 덜 기다립니다. 예약하고 싶다면 전화 예약이 되는 <b>Nannarella</b>(4.7).",
     "tags": []
    },
    {
     "id": "is",
     "time": "21:00",
     "text": "젤라토: <b>Gelateria del Viale</b>(4.7). 내일 아침 8시대 기차라 짐을 미리 싸 두세요.",
     "tags": []
    }
   ],
   "notes": []
  },
  {
   "id": "dt",
   "date": "2026-12-24",
   "city": "firenze",
   "label": "",
   "title": "피렌체로, 크리스마스 이브",
   "items": [
    {
     "id": "iu",
     "time": "07:15",
     "text": "체크아웃 후 아침: 레푸블리카의 <b>Rosemary</b>(구글 4.7, 07:15 오픈)에서 크루아상과 카푸치노. 테르미니역까지 걸어서 5분.",
     "tags": []
    },
    {
     "id": "iv",
     "time": "08:10",
     "text": "로마 테르미니에서 피렌체 SMN행 약 1시간 35분(시간은 예시). 두오모 성당을 보려면 오전에 도착해야 합니다.",
     "tags": [
      [
       "book",
       "예약"
      ]
     ]
    },
    {
     "id": "iw",
     "time": "09:45",
     "text": "도착. SMN역 앞 호텔에 짐을 맡깁니다.",
     "tags": []
    },
    {
     "id": "ix",
     "time": "10:30",
     "text": "두오모 성당 내부(무료). 2025년에는 12/24 10:15–15:45에 열고 25·26일은 관광 입장이 없었습니다. 그래서 오늘 봐야 합니다. 어깨와 무릎을 가리세요.",
     "tags": []
    },
    {
     "id": "iy",
     "time": "11:45",
     "text": "점심: 중앙시장 옆 <b>Trattoria Sergio Gozzi</b>(구글 4.7)의 피렌체 가정식, 또는 <b>Trattoria Mario</b>(4.6, 현금·합석). 줄이 길면 두오모 남쪽 <b>Da' Vinattieri</b>(4.7)의 람프레도토 파니노.",
     "tags": [
      [
       "tbd",
       "24일 영업 미확인"
      ]
     ]
    },
    {
     "id": "iz",
     "time": "13:00",
     "text": "브루넬레스키 돔 등반 463계단. 2025년에는 12/24 16:30까지 열고 25일은 쉬었습니다. 브루넬레스키 패스 €30에 종탑, 세례당, 박물관이 포함되고 3일간 유효합니다.",
     "tags": [
      [
       "book",
       "시간 예약 필수"
      ]
     ]
    },
    {
     "id": "i10",
     "time": "14:45",
     "text": "같은 패스로 세례당과 두오모 박물관.",
     "tags": []
    },
    {
     "id": "i11",
     "time": "16:30",
     "text": "시뇨리아 광장과 베키오 다리에서 해 질 녘. 두오모 광장에는 대형 크리스마스트리가 서 있습니다.",
     "tags": []
    },
    {
     "id": "i12",
     "time": "19:30",
     "text": "크리스마스 이브 저녁 시뇨리아 광장 뒤 <b>Vini e Vecchi Sapori</b>(구글 4.7)의 전통 토스카나 요리. 대안은 <b>Parione</b>(4.6). 이브 영업 여부는 예약하면서 확인하세요.",
     "tags": [
      [
       "book",
       "예약"
      ],
      [
       "tbd",
       "24일 영업 미확인"
      ]
     ]
    },
    {
     "id": "i13",
     "time": "23:00",
     "text": "(선택) 두오모 성탄 전야 미사. 2024년에는 23:00에 대주교가 집전했습니다. 22:15쯤 도착하세요. 2026년 시간은 12월 중순 두오모 공식 사이트에 나옵니다.",
     "tags": [
      [
       "tbd",
       "시간 미확인"
      ]
     ]
    }
   ],
   "notes": [
    {
     "id": "n14",
     "kind": "warn",
     "html": "<b>오늘 사 둘 것.</b> 25일에는 상점과 식당이 거의 문을 닫습니다. 간식과 물을 미리 사 두세요. 베키오 궁전은 평소 목요일 14시에 닫아 오늘은 들어가기 어렵습니다."
    }
   ]
  },
  {
   "id": "d15",
   "date": "2026-12-25",
   "city": "firenze",
   "label": "",
   "title": "피렌체의 성탄절",
   "items": [
    {
     "id": "i16",
     "time": "오전",
     "text": "국립·시립 박물관과 두오모 관람이 모두 쉽니다(2025년 기준). 오늘은 미사와 산책 위주로 보냅니다. 버스도 평소보다 적습니다.",
     "tags": []
    },
    {
     "id": "i17",
     "time": "09:00",
     "text": "아침: <b>Pasticceria Nencioni</b>(구글 4.6) 또는 <b>Forno Ghibellina</b>(4.8).",
     "tags": [
      [
       "tbd",
       "성탄 아침 영업 미확인"
      ]
     ]
    },
    {
     "id": "i18",
     "time": "10:30",
     "text": "(선택) 두오모 성탄 미사. 평소 주일과 축일에는 9:00, 10:30(라틴어), 12:00, 18:00에 미사가 있고, 관광 입장은 없습니다. 성탄 미사 시간은 12월 중순에 발표됩니다.",
     "tags": [
      [
       "tbd",
       "시간 미확인"
      ]
     ]
    },
    {
     "id": "i19",
     "time": "11:45",
     "text": "베키오 다리를 건너 오르트라르노로. <b>산토 스피리토 성당</b>은 2025년 성탄절에 11:30–13:30에 열었습니다.",
     "tags": []
    },
    {
     "id": "i1a",
     "time": "13:00",
     "text": "성탄 점심 산 프레디아노의 <b>Trattoria I'Brindellone</b>(구글 4.7)에서 토스카나 가정식. 대안은 <b>Osteria dell'Enoteca</b>(4.7).",
     "tags": [
      [
       "book",
       "전화 예약"
      ],
      [
       "tbd",
       "25일 영업 미확인"
      ]
     ]
    },
    {
     "id": "i1b",
     "time": "15:45",
     "text": "산 니콜로 쪽 계단으로 <b>미켈란젤로 광장</b>까지 오르막 20–30분. 16:45경 일몰을 보고, 바로 위 <b>산 미니아토 알 몬테 성당</b>(2025년 성탄절 15:30–18시)에 들릅니다.",
     "tags": []
    },
    {
     "id": "i1c",
     "time": "17:45",
     "text": "시내로 내려와 베키오 다리, 시뇨리아 광장, 두오모 광장 트리 야경.",
     "tags": []
    },
    {
     "id": "i1d",
     "time": "19:30",
     "text": "저녁: <b>Trattoria Dall'Oste</b>(구글 4.7)의 비스테카. 평소 매일 열지만 25일 영업은 공지가 없어 예약을 시도해 확인하세요. 대안은 <b>Trattoria Pallottino</b>(4.6).",
     "tags": [
      [
       "tbd",
       "25일 영업 미확인"
      ]
     ]
    }
   ],
   "notes": [
    {
     "id": "n1e",
     "kind": "info",
     "html": "<b>성탄절에 여는 곳(2025년 기준):</b> 산타 마리아 노벨라 성당 13–17시(무료), 산토 스피리토 성당, 산 미니아토 알 몬테 성당, 산티시마 안눈치아타 성당. 2026년 운영표는 12월 중순 피렌체 관광안내소(feelflorence.it)에 올라옵니다. 식당은 성탄 영업이 공식 확인된 곳이 없어, 12월 초에 예약하면서 한 곳은 꼭 확정하세요."
    }
   ]
  },
  {
   "id": "d1f",
   "date": "2026-12-26",
   "city": "pisa",
   "label": "",
   "title": "피사의 사탑, 저녁에 다비드상",
   "items": [
    {
     "id": "i1g",
     "time": "08:45",
     "text": "아침: SMN역 근처 <b>Forno Becagli</b>(구글 4.8).",
     "tags": [
      [
       "tbd",
       "연휴 영업 미확인"
      ]
     ]
    },
    {
     "id": "i1h",
     "time": "09:40",
     "text": "피렌체 SMN에서 피사 중앙역(Pisa Centrale)행 지역열차, 약 1시간, 편도 약 €9. 좌석 지정이 없어 당일 앱이나 발권기에서 삽니다. 공휴일 시간표라 편수가 줄 수 있으니 12/13 새 시간표가 나온 뒤 앱에서 확인하세요.",
     "tags": [
      [
       "warn",
       "공휴일 감편"
      ]
     ]
    },
    {
     "id": "i1i",
     "time": "10:45",
     "text": "피사 도착. 코르소 이탈리아를 따라 메초 다리를 건너고 회랑 거리 보르고 스트레토를 지나 사탑까지 약 30분. 걷기 싫으면 LAM Rossa 버스로 약 15분입니다.",
     "tags": []
    },
    {
     "id": "i1j",
     "time": "11:45",
     "text": "미라콜리 광장 보관소에 가방을 맡깁니다(무료). 작은 가방도 들고 올라갈 수 없어서 슬롯 15분 전까지 와야 합니다.",
     "tags": []
    },
    {
     "id": "i1k",
     "time": "12:00",
     "text": "피사의 사탑 약 €20, 251계단, 약 30분. 2026년 공식 달력상 12/26은 9:00–19:00 운영입니다. 늦으면 입장도 환불도 안 되고, 8세 미만은 오를 수 없습니다.",
     "tags": [
      [
       "book",
       "예약"
      ]
     ]
    },
    {
     "id": "i1l",
     "time": "12:45",
     "text": "피사 대성당(10–19시). 사탑 티켓에 무료 입장이 포함됩니다. 공휴일에는 미사로 시간이 바뀔 수 있어 1주 전에 opapisa.it 달력을 다시 보세요.",
     "tags": []
    },
    {
     "id": "i1m",
     "time": "13:30",
     "text": "점심: 보르고 스트레토 근처 <b>Trattoria Sant'Omobono</b>(구글 4.6) 의 피사 향토 요리. 빠르게 먹으려면 광장 남쪽 <b>L'Ostellino</b>(4.8)의 수제 파니노.",
     "tags": [
      [
       "book",
       "전화 예약"
      ],
      [
       "tbd",
       "26일 영업 미확인"
      ]
     ]
    },
    {
     "id": "i1n",
     "time": "14:45",
     "text": "역으로 가는 길에 메초 다리 북쪽 <b>La Bottega del Gelato</b>(4.7).",
     "tags": []
    },
    {
     "id": "i1o",
     "time": "15:15",
     "text": "피사 중앙역에서 피렌체행 지역열차. 16:15경 도착.",
     "tags": []
    },
    {
     "id": "i1p",
     "time": "16:45",
     "text": "아카데미아 미술관의 다비드상 €20 + 예약비 €4, 약 1시간. 2025년에는 12/26 18:50까지 열었고 최종 입장은 18:20입니다.",
     "tags": [
      [
       "book",
       "예약"
      ]
     ]
    },
    {
     "id": "i1q",
     "time": "18:00",
     "text": "베키오 다리와 오르트라르노 강변 산책.",
     "tags": []
    },
    {
     "id": "i1r",
     "time": "19:30",
     "text": "저녁(비스테카): <b>La Buchetta</b>(구글 4.8) 테이블에서 썰어 주는 티본과 뇨키. 대안은 <b>Trattoria Dall'Oste</b>(4.7). 비스테카는 보통 1kg 이상 단위로 주문합니다.",
     "tags": [
      [
       "book",
       "예약"
      ]
     ]
    },
    {
     "id": "i1s",
     "time": "21:30",
     "text": "젤라토: <b>La Carraia</b>(4.7) 또는 <b>Gelateria dei Neri</b>(4.7).",
     "tags": []
    }
   ],
   "notes": [
    {
     "id": "n1t",
     "kind": "info",
     "html": "<b>왜 피사가 26일인가.</b> 성탄절에는 열차가 줄고 피사 식당도 대부분 쉴 가능성이 높습니다. 26일은 공휴일이지만 사탑이 9–19시로 열고, 피렌체 박물관도 다시 열어 저녁에 다비드상까지 볼 수 있습니다. 조토의 종탑(414계단)은 아침 기차 전에 오르기엔 빠듯해 일정에서 뺐습니다."
    }
   ]
  },
  {
   "id": "d1u",
   "date": "2026-12-27",
   "city": "venezia",
   "label": "",
   "title": "기차로 베네치아, 해 질 녘 산마르코",
   "items": [
    {
     "id": "i1v",
     "time": "08:30",
     "text": "피렌체 호텔 체크아웃.",
     "tags": []
    },
    {
     "id": "i1w",
     "time": "09:20",
     "text": "피렌체 SMN에서 베네치아 산타 루치아행 약 2시간 5분(시간은 예시). <b>Mestre가 아니라 S. Lucia에서 내리세요.</b>",
     "tags": [
      [
       "book",
       "예약"
      ]
     ]
    },
    {
     "id": "i1x",
     "time": "11:30",
     "text": "도착해서 역 앞 호텔에 짐을 맡깁니다.",
     "tags": []
    },
    {
     "id": "i1y",
     "time": "12:00",
     "text": "(선택) 도르소두로의 전통 제과점 <b>Pasticceria Tonolo</b>(구글 4.6). 일요일은 13시에 닫고 늦은 오전에는 품절이 많습니다.",
     "tags": []
    },
    {
     "id": "i1z",
     "time": "12:30",
     "text": "바포레토(수상버스) 48시간권 €35를 개시하면 12/29 오전 역으로 가는 배까지 쓸 수 있습니다. 탈 때마다 단말기에 태그하세요.",
     "tags": []
    },
    {
     "id": "i20",
     "time": "13:00",
     "text": "점심: <b>Dal Moro's</b>(4.6)의 생면 파스타 박스. 일요일 영업은 출처마다 달라 미확인입니다. 닫혀 있으면 산마르코 쪽에서 해결하세요.",
     "tags": [
      [
       "tbd",
       "일요일 영업 미확인"
      ]
     ]
    },
    {
     "id": "i21",
     "time": "14:30",
     "text": "산마르코 대성당 일요일에는 14:00–17:15(최종 입장 16:45)에만 들어갈 수 있습니다. 가방은 크기와 상관없이 반입이 안 되니 정문 왼쪽 무료 보관소에 맡기세요.",
     "tags": [
      [
       "book",
       "예약"
      ]
     ]
    },
    {
     "id": "i22",
     "time": "16:30",
     "text": "산마르코 광장에서 해 질 녘을 보고, 리알토 쪽으로 5분 거리 <b>VizioVirtù</b>(구글 4.7, 일 10–19시)에서 아주 진한 핫초코(약 €4).",
     "tags": []
    },
    {
     "id": "i23",
     "time": "19:30",
     "text": "저녁: 카나레조의 <b>Osteria Alla Frasca</b>(구글 4.6) 새우·주키니 뇨키와 해산물 파스타. 대안은 <b>Alle Corone</b>(4.6).",
     "tags": [
      [
       "book",
       "예약"
      ]
     ]
    },
    {
     "id": "i24",
     "time": "21:30",
     "text": "리알토 다리 야경을 보고 젤라토 <b>Suso</b>(4.6).",
     "tags": []
    }
   ],
   "notes": [
    {
     "id": "n25",
     "kind": "warn",
     "html": "<b>아쿠아 알타(만조 침수).</b> 산마르코 광장은 조위 75–80cm부터 잠깁니다. MOSE 방벽은 약 101cm 이상일 때만 올라갑니다. Hi!tide Venice 앱으로 예보를 보고, 높으면 일회용 덧신이나 장화를 사서 신으세요. 만조는 몇 시간이면 빠집니다."
    }
   ]
  },
  {
   "id": "d26",
   "date": "2026-12-28",
   "city": "venezia",
   "label": "",
   "title": "두칼레 궁전, 부라노 섬, 바카로",
   "items": [
    {
     "id": "i27",
     "time": "08:15",
     "text": "아침: 두칼레 궁전 뒤 <b>Pasticceria Bonifacio</b>(구글 4.7). 서서 먹는 작은 제과점입니다.",
     "tags": []
    },
    {
     "id": "i28",
     "time": "09:00",
     "text": "두칼레 궁전 겨울 9–18시(최종 입장 17시). 코레르 박물관 입장이 포함됩니다. 비밀의 통로 투어(€40, 인원 제한)는 선택.",
     "tags": [
      [
       "book",
       "11/28까지 예매 시 €30"
      ]
     ]
    },
    {
     "id": "i29",
     "time": "10:50",
     "text": "폰다멘테 노베 선착장까지 걸어서 약 20분.",
     "tags": []
    },
    {
     "id": "i2a",
     "time": "11:10",
     "text": "12번 바포레토로 무라노를 거쳐 부라노까지 약 40분. 겨울 시간표(2026-11-02 시행)는 매시 10분·40분 출발이라 11:45 배는 없습니다.",
     "tags": []
    },
    {
     "id": "i2b",
     "time": "12:00",
     "text": "부라노 점심: <b>Ristorantino Al Museo</b>(구글 4.7) 해산물 리소토, 바칼라 만테카토. 다리 건너 마조르보의 <b>Trattoria alla Maddalena</b>(4.6)도 좋습니다.",
     "tags": [
      [
       "book",
       "예약"
      ],
      [
       "tbd",
       "연말 휴업 미확인"
      ]
     ]
    },
    {
     "id": "i2c",
     "time": "13:30",
     "text": "색색의 집이 늘어선 부라노 산책(구글 4.8).",
     "tags": []
    },
    {
     "id": "i2d",
     "time": "15:25",
     "text": "부라노에서 12번 배로 폰다멘테 노베까지, 16:05경 도착. 무라노는 평점 4.5라 들르지 않습니다.",
     "tags": []
    },
    {
     "id": "i2e",
     "time": "17:30",
     "text": "바카로: 도르소두로의 <b>Cantine del Vino già Schiavi</b>(4.7)에서 크로스티니 치케티와 와인 한 잔. 운하 맞은편 <b>Osteria Al Squero</b>(4.7)도 함께. 둘 다 월요일 20:30까지.",
     "tags": []
    },
    {
     "id": "i2f",
     "time": "19:30",
     "text": "저녁: 근처 <b>Trattoria ai Cugnai dal 1911</b>(구글 4.6) 새우 스파게티와 해산물 파스타. 대안은 산마르코의 <b>Bistrot de Venise</b>(4.6, 고가).",
     "tags": [
      [
       "book",
       "전화 예약"
      ]
     ]
    }
   ],
   "notes": [
    {
     "id": "n2g",
     "kind": "info",
     "html": "<b>월요일에 쉬는 곳:</b> Pasticceria Tonolo, VizioVirtù. 콘타리니 델 보볼로 나선 계단(4.5)과 무라노(4.5)는 평점 기준으로 뺐습니다."
    }
   ]
  },
  {
   "id": "d2h",
   "date": "2026-12-29",
   "city": "roma",
   "label": "",
   "title": "로마로 돌아가 판테온과 트레비",
   "items": [
    {
     "id": "i2i",
     "time": "07:45",
     "text": "아침: 피아찰레 로마 쪽 <b>Pasticceria Tonolo</b>(4.6, 화 7:30부터)에서 크림 퍼프. 역까지 걸어서 15분. 대안은 게토의 <b>Panificio Volpe</b>(4.7).",
     "tags": []
    },
    {
     "id": "i2j",
     "time": "09:25",
     "text": "베네치아 S. Lucia에서 로마 테르미니행 약 3시간 45분–4시간(시간은 예시). 역까지 가는 바포레토는 48시간권 유효시간 안입니다.",
     "tags": [
      [
       "book",
       "예약"
      ]
     ]
    },
    {
     "id": "i2k",
     "time": "13:20",
     "text": "도착. 테르미니 근처 호텔에 짐을 맡깁니다. 첫 3박과 같은 호텔이면 편합니다.",
     "tags": []
    },
    {
     "id": "i2l",
     "time": "14:00",
     "text": "커피: 라르고 아르젠티나 남쪽 <b>Cappuccino Bar</b>(구글 4.8). 15:30에 닫으니 판테온 전에 들르세요. 테르미니에서 버스로 약 15분.",
     "tags": []
    },
    {
     "id": "i2m",
     "time": "14:30",
     "text": "판테온 €7, 09–19시(최종 입장 18:30).",
     "tags": [
      [
       "book",
       "예약 권장"
      ]
     ]
    },
    {
     "id": "i2n",
     "time": "15:30",
     "text": "젤라토: Via del Corso의 <b>Venchi</b>(4.7) 또는 트레비 바로 옆 <b>Gelateria Valentino</b>(4.7).",
     "tags": []
    },
    {
     "id": "i2o",
     "time": "16:00",
     "text": "트레비 분수(수조 앞 구역 €2, 카드만, 이날은 11:30부터 유료)를 보고 스페인 계단까지 걷습니다.",
     "tags": []
    },
    {
     "id": "i2p",
     "time": "19:30",
     "text": "저녁: 나보나 근처 <b>Cantina e Cucina</b>(구글 4.7, 연중무휴) 아티초크 카르보나라와 아마트리차나. 예약 가능 여부는 전화로 확인하세요. 대안은 <b>Mimì e Cocò</b>(4.7).",
     "tags": []
    }
   ],
   "notes": []
  },
  {
   "id": "d2q",
   "date": "2026-12-30",
   "city": "roma",
   "label": "출국",
   "title": "보르게세 미술관, 로마 공항으로",
   "items": [
    {
     "id": "i2r",
     "time": "08:15",
     "text": "체크아웃하고 호텔에 짐을 맡깁니다.",
     "tags": []
    },
    {
     "id": "i2s",
     "time": "09:00",
     "text": "보르게세 미술관 2시간 단위 입장, 약 €18. 베르니니 조각이 핵심입니다.",
     "tags": [
      [
       "book",
       "예약 필수"
      ]
     ]
    },
    {
     "id": "i2t",
     "time": "11:15",
     "text": "핀초 언덕 테라스에서 포폴로 광장을 내려다보고 광장으로 내려갑니다.",
     "tags": []
    },
    {
     "id": "i2u",
     "time": "12:30",
     "text": "점심: 포폴로 문 바로 밖 <b>Pastasciutta</b>(Piazzale Flaminio, 구글 4.6)의 생면 파스타. 메트로 A선 Flaminio역에서 테르미니까지 약 10분입니다.",
     "tags": []
    },
    {
     "id": "i2v",
     "time": "14:30",
     "text": "호텔에서 짐을 찾습니다.",
     "tags": []
    },
    {
     "id": "i2w",
     "time": "15:10",
     "text": "테르미니에서 레오나르도 익스프레스 32분, €14.",
     "tags": []
    },
    {
     "id": "i2x",
     "time": "16:00",
     "text": "공항 도착. 출국 때도 EES 기록이 남고, 택스리펀 세관 확인이 있으면 시간이 더 걸립니다.",
     "tags": []
    }
   ],
   "notes": [
    {
     "id": "n2y",
     "kind": "warn",
     "html": "<b>시간 맞추기.</b> 위 시간은 20시경 출발편 기준입니다. 국제선 출발 3–3.5시간 전에 공항에 닿도록 레오나르도 익스프레스 시간을 고르세요. 장거리 기차는 전날 끝냈으니 오늘은 공항철도만 타면 됩니다."
    }
   ]
  }
 ],
 "checklist": [
  {
   "id": "g2z",
   "title": "지금 바로 (11월 첫째 주)",
   "items": [
    {
     "id": "c30",
     "label": "숙소 4곳: 로마 3박 + 1박, 피렌체 3박, 베네치아 2박",
     "meta": "로마는 첫 3박과 마지막 1박을 같은 호텔로 잡으면 동선이 단순합니다. 연말 성수기라 빨리 찹니다. 숙박세는 현장에서 따로 냅니다. <a href=\"#stay\">추천 숙소 보기</a>",
     "done": false
    },
    {
     "id": "c31",
     "label": "바티칸 박물관 · 12/22(화) 08:00",
     "meta": "€20 + 예약비 €5 (2024년 공지 기준) · <a href=\"https://tickets.museivaticani.va\" target=\"_blank\" rel=\"noopener\">tickets.museivaticani.va</a> · 2026년 공식 달력상 이날 08–20시(최종 18시)",
     "done": false
    },
    {
     "id": "c32",
     "label": "피렌체 두오모 브루넬레스키 패스 · 돔 12/24(목) 13:00대",
     "meta": "€30, 3일 유효. 돔은 시간 예약이 필요하고 매진되면 현장에서도 못 삽니다. 종탑도 포함(선택, 따로 시간 예약). 2025년 기준 12/25 휴관 · <a href=\"https://tickets.duomo.firenze.it/\" target=\"_blank\" rel=\"noopener\">tickets.duomo.firenze.it</a>",
     "done": false
    },
    {
     "id": "c33",
     "label": "피사의 사탑 · 12/26(토) 12:00대",
     "meta": "약 €20, 대성당 무료 입장 포함 · <a href=\"https://www.opapisa.it/en/tickets/buy/\" target=\"_blank\" rel=\"noopener\">opapisa.it</a> 공식 사이트 · 2026년 공식 달력상 12/26 9:00–19:00 · 방문 90일 전부터 판매 · 8세 미만 불가 · 재판매 사이트는 €25 이상",
     "done": false
    },
    {
     "id": "c34",
     "label": "아카데미아(다비드) · 12/26(토) 16:45",
     "meta": "€20 + 예약비 €4 · <a href=\"https://webshop.b-ticket.com\" target=\"_blank\" rel=\"noopener\">webshop.b-ticket.com</a> · 전화 +39 055 294883 · 최종 입장 18:20 · 12/25 휴관",
     "done": false
    },
    {
     "id": "c35",
     "label": "산마르코 대성당 · 12/27(일) 14:30",
     "meta": "€10부터, 완전권 €30 · <a href=\"https://tickets.basilicasanmarco.it\" target=\"_blank\" rel=\"noopener\">tickets.basilicasanmarco.it</a> · 일요일·공휴일 14:00–17:15(최종 16:45)",
     "done": false
    },
    {
     "id": "c36",
     "label": "보르게세 미술관 · 12/30(수) 09:00",
     "meta": "약 €18 · 예약 필수, 2시간 단위 · 최종 17:45 · 월요일 휴관 · 공식 사이트(galleriaborghese)에서 예약",
     "done": false
    },
    {
     "id": "c37",
     "label": "기차 3구간: 12/24 로마→피렌체, 12/27 피렌체→베네치아, 12/29 베네치아→로마",
     "meta": "<a href=\"https://www.trenitalia.com\" target=\"_blank\" rel=\"noopener\">trenitalia.com</a> · <a href=\"https://www.italotreno.com\" target=\"_blank\" rel=\"noopener\">italotreno.com</a> · 판매가 아직 안 열렸으면 매주 확인 · 12/29는 변경 가능한 운임 권장 · 12/26 피렌체–피사 지역열차는 예약 없이 당일 구매",
     "done": false
    },
    {
     "id": "c38",
     "label": "(선택) 판테온 · 12/29(화) 14:30",
     "meta": "€7(2026년 7월부터) · 09–19시, 최종 18:30 · Musei Italiani 공식 앱·포털, 시간 지정",
     "done": false
    }
   ]
  },
  {
   "id": "g39",
   "title": "11월 22–28일 (오픈일 알람)",
   "items": [
    {
     "id": "c3a",
     "label": "콜로세움 Full Experience · 12/23(수) 08:30 · 11/23경 오픈",
     "meta": "€24 (일반권 €18) · <a href=\"https://ticketing.colosseo.it\" target=\"_blank\" rel=\"noopener\">ticketing.colosseo.it</a> · 30일 전 오픈, 실명(여권). 몇 시에 풀리는지는 출처마다 달라서 그날 수시로 확인",
     "done": false
    },
    {
     "id": "c3b",
     "label": "두칼레 궁전 · 12/28(월) 09:00 · 11/28까지",
     "meta": "30일 전까지 온라인 €30, 이후 €35 · <a href=\"https://palazzoducale.visitmuve.it\" target=\"_blank\" rel=\"noopener\">palazzoducale.visitmuve.it</a>",
     "done": false
    }
   ]
  },
  {
   "id": "g3c",
   "title": "12월 초 (식당 예약)",
   "items": [
    {
     "id": "c3d",
     "label": "피렌체 성탄 식당: Vini e Vecchi Sapori 12/24 저녁, I'Brindellone 12/25 점심, Dall'Oste 12/25 저녁",
     "meta": "세 곳 모두 성탄 영업을 공식 확인하지 못했습니다. 예약하면서 확인하고, 안 되면 대안(Parione, Osteria dell'Enoteca, Pallottino)으로 잡으세요 · I'Brindellone 전화 +39 055 217879 · Dall'Oste 공식 사이트 예약",
     "done": false
    },
    {
     "id": "c3e",
     "label": "12/26: Sant'Omobono(피사) 점심, La Buchetta(피렌체) 저녁",
     "meta": "Sant'Omobono 전화 +39 050 54 08 47(테이블이 적음) · La Buchetta 공식 사이트 예약 · 공휴일 영업 여부도 확인",
     "done": false
    },
    {
     "id": "c3f",
     "label": "로마: La Sagrestia 12/22 저녁, Cantina e Cucina 12/29 저녁",
     "meta": "La Sagrestia 전화 +39 06 4544 1774 · Cantina e Cucina 전화 +39 06 689 2574(예약 가능 여부 확인) · Pastasciutta, al42, Tonnarello는 예약을 받지 않아 일찍 가서 줄을 섭니다",
     "done": false
    },
    {
     "id": "c3g",
     "label": "베네치아: Alla Frasca 12/27 저녁, Al Museo 12/28 점심, Ai Cugnai 12/28 저녁",
     "meta": "Alla Frasca +39 041 241 2585 · Al Museo +39 041 735012 또는 홈페이지 · Ai Cugnai +39 041 528 9238 · 연말 휴무 여부를 같이 확인",
     "done": false
    },
    {
     "id": "c3h",
     "label": "피렌체 성탄 운영시간과 두오모 미사 시간 발표 확인",
     "meta": "12월 중순 <a href=\"https://www.feelflorence.it/\" target=\"_blank\" rel=\"noopener\">feelflorence.it</a> 성탄 운영표, 두오모 공식 사이트 미사 일정 · 피사 대성당 공휴일 시간(opapisa.it)도 확인",
     "done": false
    },
    {
     "id": "c3i",
     "label": "나보나 크리스마스 마켓 2026 일정 확인",
     "meta": "turismoroma.it · 2025년에는 12/1–1/6에 열렸습니다",
     "done": false
    }
   ]
  },
  {
   "id": "g3j",
   "title": "출발 전",
   "items": [
    {
     "id": "c3k",
     "label": "컨택리스 카드 1인 1장, 해외결제·3D Secure 설정",
     "meta": "로마 메트로, 레오나르도 익스프레스, 피렌체 버스 모두 카드 1장에 1명입니다.",
     "done": false
    },
    {
     "id": "c3l",
     "label": "앱 설치: Trenitalia, Italo, Google 지도 오프라인, FreeNow, Hi!tide Venice",
     "meta": "기차 티켓은 앱의 PNR 코드만 보여 주면 됩니다.",
     "done": false
    },
    {
     "id": "c3m",
     "label": "12/26 피렌체→피사 09:40 지역열차 확인",
     "meta": "12/13 새 시간표 시작 후 Trenitalia 앱에서 공휴일 시간표 확인 · 공휴일이라 편수가 줄 수 있습니다",
     "done": false
    },
    {
     "id": "c3n",
     "label": "파업 일정 확인",
     "meta": "<a href=\"https://scioperi.mit.gov.it\" target=\"_blank\" rel=\"noopener\">scioperi.mit.gov.it</a> · 연말연시는 파업 금지기간이지만 정확한 날짜는 미확인",
     "done": false
    },
    {
     "id": "c3o",
     "label": "베네치아 조수 예보 확인 (12/26경부터)",
     "meta": "높으면 장화나 일회용 덧신 준비",
     "done": false
    }
   ]
  }
 ],
 "places": {
  "roma": {
   "notes": [
    "12/21–24 · 3박, 12/29–30 · 1박. 식당·카페·젤라토는 구글 평점 4.6 이상(리뷰 300개 이상)만 남겼습니다. 평점은 Wanderlog와 Restaurant Guru에 표시된 구글 수치(2026년 11월)입니다. 각 카드의 '네이버 블로그 후기' 버튼을 누르면 최신 한국어 후기를 바로 검색할 수 있습니다.",
    "<b>Antico Caffè Greco</b>는 2025년 9월 퇴거로 문을 닫았고 재개장 소식이 없어 뺐습니다. 바에 서서 마시면 앉을 때보다 절반 이하 가격입니다."
   ],
   "sight": [
    {
     "id": "s3p",
     "name": "콜로세움·포로 로마노·팔라티노",
     "book": "ticketing.colosseo.it · 30일 전 오픈",
     "price": "€18 / €24",
     "when": "12/23",
     "info": "겨울 08:30–16:30(최종 입장 15:30), 12/25 휴관, 실명 티켓(여권 대조)",
     "tags": [],
     "memo": "",
     "mapQ": "콜로세움·포로 로마노·팔라티노 로마",
     "naverQ": "로마 콜로세움·포로 로마노·팔라티노"
    },
    {
     "id": "s3q",
     "name": "바티칸 박물관·시스티나",
     "book": "tickets.museivaticani.va",
     "price": "€25",
     "when": "12/22",
     "info": "2026년 공식 달력: 12/22 08–20시(최종 18시). 12/24·31은 15시까지, 12/25·26 휴관",
     "tags": [],
     "memo": "",
     "mapQ": "바티칸 박물관·시스티나 로마",
     "naverQ": "로마 바티칸 박물관·시스티나"
    },
    {
     "id": "s3r",
     "name": "성 베드로 대성당",
     "book": "필요 없음",
     "price": "무료",
     "when": "12/22",
     "info": "겨울 07–19시. 쿠폴라 07:30–17시(계단 €10, 엘리베이터 €15, 현장). 수요일 오전 일반알현 때는 닫힘",
     "tags": [],
     "memo": "",
     "mapQ": "성 베드로 대성당 로마",
     "naverQ": "로마 성 베드로 대성당"
    },
    {
     "id": "s3s",
     "name": "보르게세 미술관",
     "book": "공식 사이트 · 필수",
     "price": "약 €18",
     "when": "12/30",
     "info": "2시간 단위 입장, 최종 17:45. 월요일·12/25 휴관",
     "tags": [],
     "memo": "",
     "mapQ": "보르게세 미술관 로마",
     "naverQ": "로마 보르게세 미술관"
    },
    {
     "id": "s3t",
     "name": "판테온",
     "book": "Musei Italiani · 시간 지정",
     "price": "약 €7",
     "when": "12/29",
     "info": "09–19시(최종 18:30), 12/25 휴관. 2026년 7월부터 €7",
     "tags": [],
     "memo": "",
     "mapQ": "판테온 로마",
     "naverQ": "로마 판테온"
    },
    {
     "id": "s3u",
     "name": "트레비 분수",
     "book": "현장 부스 · fontanaditrevi.roma.it",
     "price": "€2",
     "when": "12/22·29",
     "info": "수조 앞 구역만 유료(카드만). 최종 입장 21:00, 22시 이후 무료. 12/29는 11:30부터 유료",
     "tags": [],
     "memo": "",
     "mapQ": "트레비 분수 로마",
     "naverQ": "로마 트레비 분수"
    },
    {
     "id": "s3v",
     "name": "나보나 크리스마스 마켓",
     "book": "—",
     "price": "무료",
     "when": "12/22",
     "info": "2025년 12/1–1/6. 2026년 일정은 미발표",
     "tags": [],
     "memo": "",
     "mapQ": "나보나 크리스마스 마켓 로마",
     "naverQ": "로마 나보나 크리스마스 마켓"
    },
    {
     "id": "s3w",
     "name": "산탄젤로 성",
     "book": "현장·온라인",
     "price": "€18",
     "when": "선택",
     "info": "월요일 휴관",
     "tags": [],
     "memo": "",
     "mapQ": "산탄젤로 성 로마",
     "naverQ": "로마 산탄젤로 성"
    }
   ],
   "food": [
    {
     "id": "p3x",
     "name": "Trieste Pizza",
     "area": "몬티 · Via Urbana 112",
     "when": "12/21 저녁",
     "rating": "4.7",
     "reviews": "5,746",
     "what": "로마식 피자. 모르타델라·피스타치오·부라타 같은 토핑, 바삭한 가장자리. 저렴한 가벼운 저녁",
     "review": "",
     "tags": [
      [
       "ok",
       "일–목 11–22:30, 금·토 23시까지"
      ],
      [
       "warn",
       "예약 없음 · 실내 좌석 적음"
      ],
      [
       "info",
       "레푸블리카에서 도보 12–15분"
      ]
     ],
     "memo": "",
     "mapQ": "Trieste Pizza Via Urbana 112 Roma",
     "naverQ": "로마 트리에스테 피자 몬티"
    },
    {
     "id": "p3y",
     "name": "Pastasciutta (Via delle Grazie)",
     "area": "보르고·바티칸 · Via delle Grazie 5",
     "when": "12/22 점심",
     "rating": "4.7",
     "reviews": "10,381",
     "what": "생면 파스타를 바로 조리(카르보나라, 카초 에 페페, 라구). 한 접시 약 €5–8, 포장 위주라 빠른 점심에 좋습니다",
     "review": "",
     "tags": [
      [
       "ok",
       "매일 10–22시, 공휴일 포함(공식)"
      ],
      [
       "warn",
       "예약 불가 · 좌석 적고 화장실 없음"
      ]
     ],
     "memo": "",
     "mapQ": "Pastasciutta Via delle Grazie 5 Roma",
     "naverQ": "로마 파스타슈타 바티칸"
    },
    {
     "id": "p3z",
     "name": "Borghiciana Pastificio Artigianale",
     "area": "보르고 · Borgo Pio 186",
     "when": "12/22 점심 대안",
     "rating": "4.6",
     "reviews": "5,440",
     "what": "수제 파스타 공방. 버섯 페투치네, 리코타 라비올리, 라자냐, 카르보나라",
     "review": "",
     "tags": [
      [
       "ok",
       "화 11:45–21시"
      ],
      [
       "warn",
       "일 휴무 · 테이블 적음"
      ]
     ],
     "memo": "",
     "mapQ": "Borghiciana Pastificio Artigianale Borgo Pio 186",
     "naverQ": "로마 보르기치아나 파스타"
    },
    {
     "id": "p40",
     "name": "Pizza Florida",
     "area": "라르고 아르젠티나 · Via Florida 25",
     "when": "12/22 간식",
     "rating": "4.8",
     "reviews": "4,313",
     "what": "무게 단위 조각 피자(피자 알 탈리오), 한 조각 약 €2.5. 토핑이 다양합니다",
     "review": "",
     "tags": [
      [
       "ok",
       "월–토 10–22시"
      ],
      [
       "warn",
       "일 휴무 · 의자 5개 정도"
      ]
     ],
     "memo": "",
     "mapQ": "Pizza Florida Via Florida 25 Roma",
     "naverQ": "로마 피자 플로리다 조각피자"
    },
    {
     "id": "p41",
     "name": "La Sagrestia",
     "area": "판테온 옆 · Via del Seminario 89",
     "when": "12/22 저녁",
     "rating": "4.7",
     "reviews": "7,752",
     "what": "카르보나라(트러플 카르보나라), 살팀보카, 피자, 티라미수. 리뷰상 1인 €30–40",
     "review": "",
     "tags": [
      [
       "book",
       "전화 +39 06 4544 1774"
      ],
      [
       "ok",
       "매일 영업(저녁 19–23시)"
      ],
      [
       "tbd",
       "연말 휴무 미확인"
      ]
     ],
     "memo": "",
     "mapQ": "La Sagrestia Via del Seminario 89 Roma",
     "naverQ": "로마 라 사그레스티아 판테온"
    },
    {
     "id": "p42",
     "name": "al42 by Pasta Chef",
     "area": "몬티 · Via Baccina 42",
     "when": "12/23 점심",
     "rating": "4.7",
     "reviews": "7,270",
     "what": "카르보나라, 아마트리차나, 라자냐, 새우 탈리올리니. 간이 파스타집, 저렴",
     "review": "",
     "tags": [
      [
       "ok",
       "수 12:30–15:30, 19–21:30"
      ],
      [
       "warn",
       "화 휴무 · 예약 없음, 줄 있음"
      ]
     ],
     "memo": "",
     "mapQ": "al42 by Pasta Chef Via Baccina 42 Roma",
     "naverQ": "로마 파스타셰프 몬티"
    },
    {
     "id": "p43",
     "name": "Tonnarello",
     "area": "트라스테베레 · Via della Paglia 1",
     "when": "12/23 저녁",
     "rating": "4.7",
     "reviews": "111,074",
     "what": "토나렐리 카초 에 페페, 카르보나라, 아마트리차나, 미트볼",
     "review": "",
     "tags": [
      [
       "ok",
       "매일 11:30–23시(공식)"
      ],
      [
       "warn",
       "예약 불가 · 19시 전에 가야 덜 기다림"
      ]
     ],
     "memo": "",
     "mapQ": "Tonnarello Via della Paglia 1 Roma",
     "naverQ": "로마 토나렐로 트라스테베레"
    },
    {
     "id": "p44",
     "name": "Nannarella",
     "area": "트라스테베레 · Piazza di San Calisto 7/a",
     "when": "12/23 저녁 대안",
     "rating": "4.7",
     "reviews": "47,574",
     "what": "토나렐리, 카르보나라, 카초 에 페페, 소꼬리 찜(코다 알라 바치나라). 1인 €20–30",
     "review": "",
     "tags": [
      [
       "book",
       "전화 +39 06 581 5378"
      ],
      [
       "ok",
       "매일 11:30–23:30"
      ],
      [
       "warn",
       "매우 붐빔"
      ]
     ],
     "memo": "",
     "mapQ": "Nannarella Piazza di San Calisto 7 Roma",
     "naverQ": "로마 난나렐라 트라스테베레"
    },
    {
     "id": "p45",
     "name": "Cantina e Cucina",
     "area": "나보나 · Via del Governo Vecchio 87",
     "when": "12/29 저녁",
     "rating": "4.7",
     "reviews": "18,049",
     "what": "아티초크 카르보나라, 바삭한 아마트리차나, 미트볼 파스타, 천연발효 피자, 티라미수",
     "review": "",
     "tags": [
      [
       "ok",
       "매일 11–23:30, 연중무휴(공식)"
      ],
      [
       "book",
       "전화 +39 06 689 2574 · 예약 가능 여부 확인"
      ],
      [
       "warn",
       "피크 시간 대기"
      ]
     ],
     "memo": "",
     "mapQ": "Cantina e Cucina Via del Governo Vecchio 87 Roma",
     "naverQ": "로마 칸티나 에 쿠치나"
    },
    {
     "id": "p46",
     "name": "Mimì e Cocò",
     "area": "나보나 · Via del Governo Vecchio 72",
     "when": "12/29 저녁 대안",
     "rating": "4.7",
     "reviews": "9,945",
     "what": "와인바 겸 트라토리아. 카르보나라, 라자냐, 미트볼, 로즈메리 포카치아",
     "review": "",
     "tags": [
      [
       "tbd",
       "예약·영업시간 확인"
      ]
     ],
     "memo": "",
     "mapQ": "Mimì e Cocò Via del Governo Vecchio 72 Roma",
     "naverQ": "로마 미미 에 코코"
    },
    {
     "id": "p47",
     "name": "Pastasciutta (Piazzale Flaminio)",
     "area": "포폴로 문 바로 밖 · Piazzale Flaminio 10",
     "when": "12/30 점심",
     "rating": "4.6",
     "reviews": "6,016",
     "what": "생면 파스타를 바로 조리(카르보나라, 카초 에 페페, 라구 파파르델레). 1인 €10 안팎",
     "review": "",
     "tags": [
      [
       "ok",
       "매일 11–22시, 공휴일 포함(공식)"
      ],
      [
       "warn",
       "예약 불가"
      ]
     ],
     "memo": "",
     "mapQ": "Pastasciutta Piazzale Flaminio 10 Roma",
     "naverQ": "로마 파스타슈타 포폴로 광장"
    },
    {
     "id": "p48",
     "name": "Trapizzino Testaccio",
     "area": "테스타치오 · Via Giovanni Branca 88",
     "when": "",
     "rating": "4.6",
     "reviews": "5,924",
     "what": "속을 채운 삼각 피자빵 트라피치노",
     "review": "",
     "tags": [
      [
       "info",
       "대기 · 좌석 적음"
      ]
     ],
     "memo": "",
     "mapQ": "Trapizzino Testaccio Roma",
     "naverQ": "트라피치노 로마"
    }
   ],
   "cafe": [
    {
     "id": "p49",
     "name": "Rosemary terra e sapori",
     "area": "레푸블리카 · Via Modena 15",
     "when": "12/22–24 아침",
     "rating": "4.7",
     "reviews": "3,538",
     "what": "아침·브런치. 크루아상, 오믈렛, 팬케이크, 생오렌지주스와 카푸치노 세트",
     "review": "",
     "tags": [
      [
       "ok",
       "월–토 7:15–15:45"
      ],
      [
       "warn",
       "일 휴무"
      ]
     ],
     "memo": "",
     "mapQ": "Rosemary terra e sapori Via Modena 15 Roma",
     "naverQ": "로마 로즈마리 브런치 레푸블리카"
    },
    {
     "id": "p4a",
     "name": "Cappuccino Bar",
     "area": "라르고 아르젠티나 남쪽 · Via Arenula 50",
     "when": "12/29 14:00",
     "rating": "4.8",
     "reviews": "1,162",
     "what": "서서 마시는 에스프레소 바. 수상 경력 바리스타의 라테아트 카푸치노, 샌드위치",
     "review": "",
     "tags": [
      [
       "ok",
       "월–토 6:30–15:30"
      ],
      [
       "warn",
       "15:30 마감 · 일 휴무 · 서서 마심"
      ]
     ],
     "memo": "",
     "mapQ": "Cappuccino Bar Via Arenula 50 Roma",
     "naverQ": "로마 바 델 카푸치노 아레눌라"
    },
    {
     "id": "p4b",
     "name": "Barnum Roma",
     "area": "캄포 데 피오리 · Via del Pellegrino 63/65",
     "when": "12/29 커피 대안",
     "rating": "4.6",
     "reviews": "4,876",
     "what": "빈티지 인테리어 카페. 커피와 브런치",
     "review": "",
     "tags": [
      [
       "ok",
       "매일 8–15:30"
      ]
     ],
     "memo": "",
     "mapQ": "Barnum Roma Via del Pellegrino",
     "naverQ": "로마 바넘 카페"
    },
    {
     "id": "p4c",
     "name": "Antico Forno Serpenti",
     "area": "몬티 · Via dei Serpenti 122",
     "when": "12/23 점심 대안",
     "rating": "4.6",
     "reviews": "3,679",
     "what": "아르데코 분위기 빵집. 피자 알 탈리오, 크로스타타, 페이스트리, 에스프레소",
     "review": "",
     "tags": [
      [
       "ok",
       "매일 8–21시"
      ]
     ],
     "memo": "",
     "mapQ": "Antico Forno Serpenti Via dei Serpenti 122 Roma",
     "naverQ": "로마 안티코 포르노 세르펜티 몬티"
    },
    {
     "id": "p4d",
     "name": "Two Sizes",
     "area": "나보나 · Via del Governo Vecchio 88",
     "when": "12/22 간식",
     "rating": "4.7",
     "reviews": "18,303",
     "what": "티라미수 전문점. 스몰과 라지 두 가지, 포장만",
     "review": "",
     "tags": [
      [
       "ok",
       "화–일 11–22시"
      ],
      [
       "warn",
       "월 휴무 · 좌석 없음"
      ]
     ],
     "memo": "",
     "mapQ": "Two Sizes Via del Governo Vecchio 88 Roma",
     "naverQ": "로마 투사이즈 티라미수"
    }
   ],
   "gelato": [
    {
     "id": "p4e",
     "name": "Gelateria del Teatro",
     "area": "나보나 근처",
     "when": "12/22 간식",
     "rating": "4.6",
     "reviews": "4,159",
     "what": "과일과 허브를 쓴 독특한 맛",
     "review": "해외 후기: 신선하다는 평, 과대평가라는 의견도 있음.",
     "tags": [],
     "memo": "",
     "mapQ": "Gelateria del Teatro Roma",
     "naverQ": "젤라테리아 델 테아트로"
    },
    {
     "id": "p4f",
     "name": "Gelateria dell'Angeletto",
     "area": "몬티 · Via Leonina 9",
     "when": "12/23 오후",
     "rating": "4.7",
     "reviews": "2,365",
     "what": "매장에서 직접 만드는 젤라토, 콘에 최대 3가지 맛, 비건 옵션",
     "review": "",
     "tags": [
      [
       "ok",
       "월–토 11–23:30, 일 11–23:50"
      ]
     ],
     "memo": "",
     "mapQ": "Gelateria dell'Angeletto Via Leonina Roma",
     "naverQ": "로마 몬티 젤라테리아 안젤레토"
    },
    {
     "id": "p4g",
     "name": "Gelateria del Viale",
     "area": "트라스테베레 입구 · Piazza G. G. Belli 9F",
     "when": "12/23 밤",
     "rating": "4.7",
     "reviews": "2,486",
     "what": "트라스테베레 입구의 작은 젤라테리아",
     "review": "",
     "tags": [
      [
       "ok",
       "월–토 10:30–23시, 일 11–23시"
      ],
      [
       "tbd",
       "겨울 단축 영업 확인"
      ]
     ],
     "memo": "",
     "mapQ": "Gelateria del Viale Piazza Belli Roma",
     "naverQ": "로마 트라스테베레 젤라테리아 델 비알레"
    },
    {
     "id": "p4h",
     "name": "Fiordiluna",
     "area": "트라스테베레 · Via della Lungaretta 96",
     "when": "12/23 밤 대안",
     "rating": "4.6",
     "reviews": "2,278",
     "what": "꾸밈없이 품질에 집중한 수제 젤라토",
     "review": "",
     "tags": [
      [
       "tbd",
       "겨울 영업시간 확인"
      ]
     ],
     "memo": "",
     "mapQ": "Fiordiluna Via della Lungaretta 96 Roma",
     "naverQ": "로마 피오르디루나 젤라토"
    },
    {
     "id": "p4i",
     "name": "Venchi (Via del Corso)",
     "area": "콜론나 광장 근처 · Via del Corso 335",
     "when": "12/29 15:30",
     "rating": "4.7",
     "reviews": "21,647",
     "what": "초콜릿 브랜드의 젤라테리아. 초콜릿 폭포 벽, 초콜릿·잔두야 계열 맛",
     "review": "",
     "tags": [
      [
       "ok",
       "매일 영업"
      ]
     ],
     "memo": "",
     "mapQ": "Venchi Via del Corso 335 Roma",
     "naverQ": "로마 벤치 젤라또 코르소"
    },
    {
     "id": "p4j",
     "name": "Gelateria Valentino",
     "area": "트레비 바로 옆 · Via del Lavatore 96",
     "when": "12/29 대안",
     "rating": "4.7",
     "reviews": "2,303",
     "what": "사르데냐 향(Profumo di Sardegna), 페레로로쉐 맛이 대표",
     "review": "",
     "tags": [
      [
       "ok",
       "매일 11–24시"
      ]
     ],
     "memo": "",
     "mapQ": "Gelateria Valentino Via del Lavatore 96 Roma",
     "naverQ": "로마 젤라테리아 발렌티노 트레비"
    },
    {
     "id": "p4k",
     "name": "Fassi",
     "area": "테르미니 남동쪽 · Via Principe Eugenio (1880년 창업)",
     "when": "",
     "rating": "4.6",
     "reviews": "11,650",
     "what": "피스타치오, 헤이즐넛, 리조와 생크림",
     "review": "한국(투어라이브): 블로거들 사이에서 '로마 3대 젤라또' 중 1위로 꼽는 평이 많다. 넓고 자릿세 없음.",
     "tags": [
      [
       "info",
       "숙소에서 가까움"
      ]
     ],
     "memo": "",
     "mapQ": "Gelateria Fassi Roma",
     "naverQ": "파씨 젤라또 로마"
    }
   ]
  },
  "firenze": {
   "notes": [
    "12/24–27 · 3박. 성탄절(12/25)에는 국립·시립 박물관과 두오모 관람이 모두 쉬고 성당 몇 곳만 엽니다(2025년 기준). 피렌체 카드(€85)는 필요 없습니다. 카드에 들어가는 아카데미아와 베키오 궁전을 합쳐도 €42이고 두오모는 빠져 있습니다.",
    "<b>자릿세(코페르토)</b>는 1인 €2–4입니다. 비스테카는 kg 단위로 주문하는데, 1kg 가격이 가게마다 €48–93으로 차이가 큽니다. 주문 전에 무게와 kg당 가격을 확인하세요."
   ],
   "sight": [
    {
     "id": "s4l",
     "name": "두오모 단지",
     "book": "tickets.duomo.firenze.it",
     "price": "€30 / €20 / €15",
     "when": "12/24",
     "info": "브루넬레스키 / 조토 / 기베르티 패스, 3일 유효. 돔과 종탑은 시간 예약 필수. 2025년 기준 돔 12/24 8:15–16:30, 12/25 휴관, 12/26 12:45–16:30",
     "tags": [],
     "memo": "",
     "mapQ": "두오모 단지 피렌체",
     "naverQ": "피렌체 두오모 단지"
    },
    {
     "id": "s4m",
     "name": "두오모 성당 본당",
     "book": "필요 없음",
     "price": "무료",
     "when": "12/24",
     "info": "2025년 기준 12/24 10:15–15:45, 12/25·26은 관광 입장 없음. 어깨·무릎 가리기",
     "tags": [],
     "memo": "",
     "mapQ": "두오모 성당 본당 피렌체",
     "naverQ": "피렌체 두오모 성당 본당"
    },
    {
     "id": "s4n",
     "name": "아카데미아 미술관",
     "book": "b-ticket · 전화",
     "price": "€24",
     "when": "12/26 16:45",
     "info": "8:15–18:50(최종 18:20), 월요일·12/25 휴관. 2026년 2월 인상",
     "tags": [],
     "memo": "",
     "mapQ": "아카데미아 미술관 피렌체",
     "naverQ": "피렌체 아카데미아 미술관"
    },
    {
     "id": "s4o",
     "name": "베키오 궁전",
     "book": "ticketsmuseums.comune.fi.it",
     "price": "€18",
     "when": "선택",
     "info": "2025년 기준 12/24·26 9–19시, 12/25 휴관. 평소 목요일은 14시까지라 2026년 12/24(목)은 일찍 닫을 수 있음. 토요일 최종 입장 18:00. 탑 €21(예약, 비 오면 폐쇄)",
     "tags": [],
     "memo": "",
     "mapQ": "베키오 궁전 피렌체",
     "naverQ": "피렌체 베키오 궁전"
    },
    {
     "id": "s4p",
     "name": "미켈란젤로 광장",
     "book": "—",
     "price": "무료",
     "when": "12/25",
     "info": "일몰 16:45경. 위쪽 산 미니아토 알 몬테 성당은 12/25 15:30–18시(2025년 기준)",
     "tags": [],
     "memo": "",
     "mapQ": "미켈란젤로 광장 피렌체",
     "naverQ": "피렌체 미켈란젤로 광장"
    },
    {
     "id": "s4q",
     "name": "피티 궁전·보볼리 정원",
     "book": "uffizi.it",
     "price": "€16 / €10",
     "when": "선택",
     "info": "12/25 휴관. 보볼리 겨울 8:15–16:30",
     "tags": [],
     "memo": "",
     "mapQ": "피티 궁전·보볼리 정원 피렌체",
     "naverQ": "피렌체 피티 궁전·보볼리 정원"
    },
    {
     "id": "s4r",
     "name": "산타 크로체 · 메디치 예배당",
     "book": "현장",
     "price": "€10 / €11",
     "when": "선택",
     "info": "2025년 기준 메디치 예배당 12/24·26 운영, 12/25 휴관. 산타 크로체는 12/26 12:30–17:45 무료",
     "tags": [],
     "memo": "",
     "mapQ": "산타 크로체 · 메디치 예배당 피렌체",
     "naverQ": "피렌체 산타 크로체 · 메디치 예배당"
    },
    {
     "id": "s4s",
     "name": "성탄절에 여는 성당",
     "book": "—",
     "price": "무료",
     "when": "12/25",
     "info": "2025년 기준 산타 마리아 노벨라 13–17시(무료), 산토 스피리토 11:30–13:30·15–18시, 산 미니아토 알 몬테 15:30–18시",
     "tags": [],
     "memo": "",
     "mapQ": "성탄절에 여는 성당 피렌체",
     "naverQ": "피렌체 성탄절에 여는 성당"
    }
   ],
   "food": [
    {
     "id": "p4t",
     "name": "Trattoria Sergio Gozzi",
     "area": "산 로렌초(중앙시장 옆) · Piazza di San Lorenzo 8R",
     "when": "12/24 점심",
     "rating": "4.7",
     "reviews": "2,098",
     "what": "산 로렌초 시장 옆 노포 트라토리아. 매일 바뀌는 피렌체 가정식 점심, 1인 약 €20–30",
     "review": "",
     "tags": [
      [
       "info",
       "점심 위주(월–토로 알려짐)"
      ],
      [
       "warn",
       "일 휴무(정보)"
      ],
      [
       "tbd",
       "12/24 영업 확인"
      ]
     ],
     "memo": "",
     "mapQ": "Trattoria Sergio Gozzi Piazza di San Lorenzo 8R Firenze",
     "naverQ": "트라토리아 세르지오 고치 피렌체"
    },
    {
     "id": "p4u",
     "name": "Trattoria Mario",
     "area": "중앙시장 옆",
     "when": "12/24 점심 대안",
     "rating": "4.6",
     "reviews": "4,659",
     "what": "비스테카, 리볼리타(빵 수프), 오늘의 파스타. 1인 €20–30",
     "review": "해외(Dissapore): 1953년 문을 연 노동자 식당 분위기.",
     "tags": [
      [
       "warn",
       "예약 불가 · 합석 · 현금만"
      ],
      [
       "warn",
       "일 휴무 · 점심만"
      ]
     ],
     "memo": "",
     "mapQ": "Trattoria Mario Firenze",
     "naverQ": "트라토리아 마리오 피렌체"
    },
    {
     "id": "p4v",
     "name": "Da' Vinattieri",
     "area": "두오모 남쪽 골목 · Via Santa Margherita 4/6r",
     "when": "12/24 점심 대안",
     "rating": "4.7",
     "reviews": "1,253",
     "what": "골목 안 작은 가게. 스키아차타 파니노와 람프레도토 파니노, 약 €6–10. 테이크아웃 위주",
     "review": "",
     "tags": [
      [
       "tbd",
       "12/24 영업 확인"
      ]
     ],
     "memo": "",
     "mapQ": "Da' Vinattieri Via Santa Margherita Firenze",
     "naverQ": "다 비나티에리 피렌체 람프레도토"
    },
    {
     "id": "p4w",
     "name": "Vini e Vecchi Sapori",
     "area": "시뇨리아 광장 뒤 · Via dei Magazzini 3/r",
     "when": "12/24 저녁",
     "rating": "4.7",
     "reviews": "1,930",
     "what": "작은 오스테리아, 전통 토스카나 요리. 1인 약 €35–50. 영문 블로그에서 크리스마스 이브 저녁 장소로 소개",
     "review": "",
     "tags": [
      [
       "book",
       "예약 필수(전화)"
      ],
      [
       "tbd",
       "12/24 저녁 영업 확인"
      ]
     ],
     "memo": "",
     "mapQ": "Vini e Vecchi Sapori Via dei Magazzini Firenze",
     "naverQ": "비니 에 베키 사포리 피렌체"
    },
    {
     "id": "p4x",
     "name": "Parione",
     "area": "토르나부오니 근처 · Via del Parione 74/76r",
     "when": "12/24 저녁 대안",
     "rating": "4.6",
     "reviews": "1,625",
     "what": "토스카나 요리와 스테이크. 1인 약 €40–60",
     "review": "",
     "tags": [
      [
       "book",
       "예약 권장"
      ],
      [
       "tbd",
       "12/24 저녁 영업 확인"
      ]
     ],
     "memo": "",
     "mapQ": "Parione Via del Parione 74 Firenze",
     "naverQ": "파리오네 피렌체"
    },
    {
     "id": "p4y",
     "name": "Trattoria I'Brindellone",
     "area": "산 프레디아노 · Piazza Piattellina 10",
     "when": "12/25 점심",
     "rating": "4.7",
     "reviews": "3,751",
     "what": "현지인이 많은 산 프레디아노 트라토리아. 토스카나 가정식과 스테이크, 1인 약 €25–40",
     "review": "",
     "tags": [
      [
       "book",
       "전화 +39 055 217879"
      ],
      [
       "warn",
       "월 휴무"
      ],
      [
       "tbd",
       "12/25 점심 영업 확인"
      ]
     ],
     "memo": "",
     "mapQ": "Trattoria I'Brindellone Piazza Piattellina Firenze",
     "naverQ": "브린델로네 피렌체"
    },
    {
     "id": "p4z",
     "name": "Osteria dell'Enoteca",
     "area": "오르트라르노(피티 궁전 남쪽) · Via Romana 70/R",
     "when": "12/25 점심 대안",
     "rating": "4.7",
     "reviews": "1,031",
     "what": "스테이크와 와인 중심 오스테리아. 1인 약 €50–70",
     "review": "",
     "tags": [
      [
       "book",
       "공식 사이트 · +39 055 228 6018"
      ],
      [
       "warn",
       "휴무일 출처마다 다름(화 또는 화–목)"
      ],
      [
       "tbd",
       "12/25 영업 확인"
      ]
     ],
     "memo": "",
     "mapQ": "Osteria dell'Enoteca Via Romana 70 Firenze",
     "naverQ": "오스테리아 델에노테카 피렌체"
    },
    {
     "id": "p50",
     "name": "Trattoria Dall'Oste",
     "area": "산 로렌초 Borgo San Lorenzo 31r 외 지점 여러 곳",
     "when": "12/25 저녁",
     "rating": "4.7",
     "reviews": "29,446",
     "what": "키아니나 비스테카 전문, 1kg 단위로 2인 공유. 1인 약 €35–50",
     "review": "한국(트립스토어 2026.4): SMN역 바로 앞이라 가깝고, 티본 1kg 약 €65, 안심과 등심을 한 번에 맛볼 수 있다. 클리앙: 티본이 가장 맛있었다, 한국어 메뉴판 있음.",
     "tags": [
      [
       "book",
       "공식 사이트 온라인 예약 · 055 2026862"
      ],
      [
       "ok",
       "평소 매일 11–22시"
      ],
      [
       "tbd",
       "12/25 영업 확인"
      ]
     ],
     "memo": "",
     "mapQ": "Trattoria Dall'Oste Borgo San Lorenzo 31 Firenze",
     "naverQ": "달오스테 피렌체 티본"
    },
    {
     "id": "p51",
     "name": "Trattoria Pallottino",
     "area": "바르젤로·산타 크로체 · Via Isola delle Stinche 1r",
     "when": "12/25 저녁 대안",
     "rating": "4.6",
     "reviews": "1,683",
     "what": "토스카나 요리와 스테이크. 1인 약 €35–50",
     "review": "",
     "tags": [
      [
       "book",
       "예약 권장"
      ],
      [
       "tbd",
       "12/25 영업 확인"
      ]
     ],
     "memo": "",
     "mapQ": "Trattoria Pallottino Via Isola delle Stinche Firenze",
     "naverQ": "팔로티노 피렌체"
    },
    {
     "id": "p52",
     "name": "La Buchetta Food & Wine",
     "area": "산타 크로체(그라치에 다리 북쪽) · Via dei Benci",
     "when": "12/26 저녁",
     "rating": "4.8",
     "reviews": "3,218",
     "what": "테이블에서 썰어 주는 티본 비스테카와 뇨키. 1인 약 €50–70",
     "review": "",
     "tags": [
      [
       "book",
       "공식 사이트 예약(카드 보증 가능성)"
      ],
      [
       "ok",
       "평소 매일 12–23시"
      ],
      [
       "tbd",
       "12/26 영업 확인"
      ]
     ],
     "memo": "",
     "mapQ": "La Buchetta Food & Wine Restaurant Via dei Benci Firenze",
     "naverQ": "부케타 피렌체 티본"
    }
   ],
   "cafe": [
    {
     "id": "p53",
     "name": "Pasticceria Nencioni",
     "area": "산탐브로조 시장 근처 · Via Pietrapiana 24/r",
     "when": "12/25 아침",
     "rating": "4.6",
     "reviews": "923",
     "what": "1950년 개업한 동네 제과점. 크루아상, 짭짤한 페이스트리, 크리스마스 과자",
     "review": "",
     "tags": [
      [
       "tbd",
       "12/25 오전 영업 확인"
      ]
     ],
     "memo": "",
     "mapQ": "Pasticceria Nencioni Via Pietrapiana Firenze",
     "naverQ": "넨치오니 피렌체 파스티체리아"
    },
    {
     "id": "p54",
     "name": "Forno Ghibellina",
     "area": "산타 크로체 · Via Ghibellina 41r",
     "when": "12/25 아침 대안",
     "rating": "4.8",
     "reviews": "1,384",
     "what": "아침 일찍 여는 베이커리. 크루아상과 페이스트리",
     "review": "",
     "tags": [
      [
       "tbd",
       "12/25 영업·좌석 확인"
      ]
     ],
     "memo": "",
     "mapQ": "Forno Ghibellina Via Ghibellina 41 Firenze",
     "naverQ": "포르노 기벨리나 피렌체"
    },
    {
     "id": "p55",
     "name": "Forno Becagli",
     "area": "SMN역 남서쪽 · Borgo Ognissanti 92r",
     "when": "12/24–27 아침",
     "rating": "4.8",
     "reviews": "615",
     "what": "동네 베이커리. 아침 빵과 페이스트리. SMN역에서 가장 가까운 4.6 이상 후보",
     "review": "",
     "tags": [
      [
       "tbd",
       "연휴 영업시간 확인"
      ]
     ],
     "memo": "",
     "mapQ": "Forno Becagli Borgo Ognissanti 92 Firenze",
     "naverQ": "포르노 베카글리 피렌체"
    },
    {
     "id": "p56",
     "name": "Vecchio Forno",
     "area": "중앙시장 근처 · Via Guelfa 32",
     "when": "12/24–27 아침 대안",
     "rating": "4.7",
     "reviews": "981",
     "what": "프랑스식 페이스트리와 짭짤한 빵",
     "review": "",
     "tags": [
      [
       "tbd",
       "12/25·26 휴무 가능성"
      ]
     ],
     "memo": "",
     "mapQ": "Vecchio Forno Via Guelfa 32 Firenze",
     "naverQ": "베키오 포르노 피렌체"
    },
    {
     "id": "p57",
     "name": "Caffè Rainer",
     "area": "산 로렌초 북쪽 · Via San Zanobi 97/R",
     "when": "",
     "rating": "4.7",
     "reviews": "503",
     "what": "오스트리아식 베이커리 카페. 크루아상, 크리스마스 빵 슈톨렌",
     "review": "",
     "tags": [
      [
       "tbd",
       "연휴 영업시간 확인"
      ]
     ],
     "memo": "",
     "mapQ": "Caffè Rainer Via San Zanobi 97 Firenze",
     "naverQ": "카페 라이너 피렌체"
    }
   ],
   "gelato": [
    {
     "id": "p58",
     "name": "La Carraia",
     "area": "오르트라르노 · Piazza N. Sauro",
     "when": "12/26 밤",
     "rating": "4.7",
     "reviews": "10,526",
     "what": "다크초콜릿, 피스타치오, 헤이즐넛. 양에 비해 저렴",
     "review": "",
     "tags": [
      [
       "ok",
       "매일 11–23:30"
      ]
     ],
     "memo": "",
     "mapQ": "Gelateria La Carraia Firenze",
     "naverQ": "라 카라이아 젤라또"
    },
    {
     "id": "p59",
     "name": "Gelateria dei Neri",
     "area": "산타 크로체 근처",
     "when": "12/26 밤 대안",
     "rating": "4.7",
     "reviews": "7,030",
     "what": "리조, 피스타치오, 다크초콜릿",
     "review": "",
     "tags": [
      [
       "warn",
       "화·수 휴무(정보)"
      ]
     ],
     "memo": "",
     "mapQ": "Gelateria dei Neri Firenze",
     "naverQ": "젤라테리아 데이 네리"
    },
    {
     "id": "p5a",
     "name": "Edoardo",
     "area": "두오모 광장",
     "when": "",
     "rating": "4.7",
     "reviews": "2,710",
     "what": "유기농 재료 젤라토",
     "review": "",
     "tags": [
      [
       "tbd",
       "영업시간 미확인"
      ]
     ],
     "memo": "",
     "mapQ": "Edoardo Il Gelato Biologico Firenze",
     "naverQ": "에도아르도 젤라또 피렌체"
    },
    {
     "id": "p5b",
     "name": "Perché no!",
     "area": "Via dei Tavolini · 시뇨리아 근처",
     "when": "",
     "rating": "4.6",
     "reviews": "3,549",
     "what": "꿀·참깨 우유 맛, 피스타치오",
     "review": "한국(브런치 2024): 화요일 휴무라고 적음.",
     "tags": [
      [
       "tbd",
       "화 휴무 가능"
      ]
     ],
     "memo": "",
     "mapQ": "Gelateria Perché no Firenze",
     "naverQ": "페르케 노 젤라또"
    }
   ]
  },
  "pisa": {
   "notes": [
    "12/26 당일치기. 피렌체 SMN에서 지역열차로 약 1시간입니다. 사탑은 2026년 공식 달력상 이날 9–19시이고, 공휴일이라 열차 편수는 출발 전에 확인하세요.",
    "<b>가는 법</b><ul><li>피렌체 SMN → 피사 중앙역(Pisa Centrale): 지역열차 50–80분, 편도 약 €9. 하루 90편 안팎이라 예약 없이 당일 앱이나 발권기에서 삽니다. 12/26은 공휴일이라 편수가 줄어드니 앱에서 시간을 확인하세요.</li><li><b>Pisa Aeroporto</b>(공항)나 <b>Pisa S. Rossore</b>가 아니라 <b>Pisa Centrale</b>로 검색하세요.</li><li>중앙역 → 사탑: 걸어서 25–30분(코르소 이탈리아 → 메초 다리 → 보르고 스트레토). 버스는 LAM Rossa로 약 15분, 1회 약 €1.70(차내 구매는 더 비쌈). 버스표는 역 안 담배가게(타바키)에서 삽니다.</li><li>큰 캐리어는 사탑 보관소에 맡길 수 없습니다. 이 일정은 피렌체 호텔에 짐을 두고 가니 해당이 없습니다.</li></ul>",
    "미라콜리 광장 바로 앞 식당과 기념품 가게는 비싸고 평이 좋지 않습니다. 먹는 건 다리 근처 구시가지에서 해결하세요."
   ],
   "sight": [
    {
     "id": "s61",
     "name": "피사의 사탑",
     "book": "opapisa.it · 시간 지정",
     "price": "약 €20",
     "when": "12/26 12:00대",
     "info": "2026년 공식 달력상 12/26 9:00–19:00(마감 30분 전까지 입장). 251계단, 약 30분. 8세 미만 불가, 18세 미만은 성인 동반. 늦으면 입장·환불 불가. 슬롯 15분 전 무료 보관소에 가방 맡기기",
     "tags": [],
     "memo": "",
     "mapQ": "피사의 사탑 피사",
     "naverQ": "피사 피사의 사탑"
    },
    {
     "id": "s62",
     "name": "피사 대성당",
     "book": "사탑 티켓에 포함",
     "price": "무료",
     "when": "12/26",
     "info": "10–19시. 공휴일에는 미사로 바뀔 수 있음. 사탑 티켓이 있으면 시간 제한 없이 입장",
     "tags": [],
     "memo": "",
     "mapQ": "피사 대성당 피사",
     "naverQ": "피사 피사 대성당"
    },
    {
     "id": "s63",
     "name": "세례당·캄포산토·시노피에 박물관",
     "book": "opapisa.it 묶음권",
     "price": "사탑 포함 약 €27",
     "when": "선택",
     "info": "묶음 가격은 비공식 출처",
     "tags": [],
     "memo": "",
     "mapQ": "세례당·캄포산토·시노피에 박물관 피사",
     "naverQ": "피사 세례당·캄포산토·시노피에 박물관"
    }
   ],
   "food": [
    {
     "id": "p64",
     "name": "Trattoria Sant'Omobono",
     "area": "보르고 스트레토 근처 · Piazza Sant'Omobono 6",
     "when": "12/26 점심",
     "rating": "4.6",
     "reviews": "1,981",
     "what": "피사 향토 트라토리아. 오리 라구, 토끼·올리브 파스타, 피사식 트리파, 바칼라. 1인 약 €25–35",
     "review": "",
     "tags": [
      [
       "book",
       "전화 +39 050 54 08 47 · 테이블이 적음"
      ],
      [
       "ok",
       "평소 12:30–14:30, 19:30–22시"
      ],
      [
       "tbd",
       "12/26 영업 확인"
      ]
     ],
     "memo": "",
     "mapQ": "Trattoria Sant'Omobono Piazza Sant'Omobono Pisa",
     "naverQ": "산토모보노 트라토리아 피사"
    },
    {
     "id": "p65",
     "name": "L'Ostellino",
     "area": "미라콜리 광장 남쪽 · Piazza Felice Cavallotti 1",
     "when": "12/26 점심 대안",
     "rating": "4.8",
     "reviews": "6,623",
     "what": "살루미와 치즈를 넣은 수제 파니노. 빠른 점심, 약 €8–12",
     "review": "",
     "tags": [
      [
       "info",
       "테이크아웃"
      ],
      [
       "tbd",
       "12/26 영업 확인"
      ]
     ],
     "memo": "",
     "mapQ": "L'Ostellino Piazza Cavallotti Pisa",
     "naverQ": "오스텔리노 피사 파니니"
    }
   ],
   "cafe": [],
   "gelato": [
    {
     "id": "p66",
     "name": "La Bottega del Gelato",
     "area": "Piazza Garibaldi 11 · 메초 다리 북쪽",
     "when": "12/26 14:45",
     "rating": "4.7",
     "reviews": "2,809",
     "what": "피스타치오, 헤이즐넛, 레몬 세이지. 피사에서 가장 많이 꼽히는 젤라토 가게(Frommer's)",
     "review": "",
     "tags": [
      [
       "ok",
       "매일 11시 또는 12시–01시"
      ],
      [
       "info",
       "점심 뒤에 들르기"
      ]
     ],
     "memo": "",
     "mapQ": "La Bottega del Gelato Pisa",
     "naverQ": "피사 보테가 델 젤라또"
    }
   ]
  },
  "venezia": {
   "notes": [
    "12/27–29 · 2박. 일요일과 월요일이라 쉬는 식당이 많아 그날 여는 곳으로 골랐습니다. 무라노(구글 4.5)는 평점 기준으로 들르지 않습니다. 2026년 방문세(당일치기 입장료)는 4–7월 일부 날짜에만 걷어서 12월에는 해당이 없습니다.",
    "<b>바카로 이용법(트립스토어 2026):</b> 진열장의 치케티를 손으로 가리켜 주문하면 됩니다. 바칼라(대구 크림) €2.5–3, 스프리츠 €3.5–5, 와인 한 잔 €2–3. 동전과 소액 현금을 챙기세요."
   ],
   "sight": [
    {
     "id": "s5c",
     "name": "산마르코 대성당",
     "book": "tickets.basilicasanmarco.it",
     "price": "€10–30",
     "when": "12/27 오후",
     "info": "월–토 9:30–17:15, 일·공휴일 14:00–17:15(최종 16:45). 가방 반입 불가(무료 보관소). 종탑 €15",
     "tags": [],
     "memo": "",
     "mapQ": "산마르코 대성당 베네치아",
     "naverQ": "베네치아 산마르코 대성당"
    },
    {
     "id": "s5d",
     "name": "두칼레 궁전",
     "book": "palazzoducale.visitmuve.it",
     "price": "€30 / €35",
     "when": "12/28",
     "info": "30일 전까지 온라인 €30. 겨울 9–18시(최종 17시). 캐리어 반입 불가. 비밀의 통로 투어 €40",
     "tags": [],
     "memo": "",
     "mapQ": "두칼레 궁전 베네치아",
     "naverQ": "베네치아 두칼레 궁전"
    },
    {
     "id": "s5e",
     "name": "곤돌라",
     "book": "필요 없음",
     "price": "€90 / €110",
     "when": "선택",
     "info": "1척 30분(최대 5명), 19시 이후 €110. 시가 정한 고정 요금이지만 2026년 공식 확인은 못 함",
     "tags": [],
     "memo": "",
     "mapQ": "곤돌라 베네치아",
     "naverQ": "베네치아 곤돌라"
    },
    {
     "id": "s5f",
     "name": "트라게토",
     "book": "—",
     "price": "약 €2",
     "when": "선택",
     "info": "대운하를 건너는 곤돌라, 현금",
     "tags": [],
     "memo": "",
     "mapQ": "트라게토 베네치아",
     "naverQ": "베네치아 트라게토"
    },
    {
     "id": "s5g",
     "name": "콘타리니 델 보볼로",
     "book": "공식 사이트",
     "price": "€9",
     "when": "제외",
     "info": "구글 4.5라 평점 기준으로 뺐습니다. 겨울 9:30–17:30",
     "tags": [],
     "memo": "",
     "mapQ": "콘타리니 델 보볼로 베네치아",
     "naverQ": "베네치아 콘타리니 델 보볼로"
    },
    {
     "id": "s5h",
     "name": "페기 구겐하임",
     "book": "공식 사이트",
     "price": "€17",
     "when": "선택",
     "info": "10–18시, 화요일·12/25 휴관",
     "tags": [],
     "memo": "",
     "mapQ": "페기 구겐하임 베네치아",
     "naverQ": "베네치아 페기 구겐하임"
    },
    {
     "id": "s5i",
     "name": "아카데미아 미술관",
     "book": "TicketOne",
     "price": "€15",
     "when": "선택",
     "info": "화–일 9–19시, 월요일 시간 미확인",
     "tags": [],
     "memo": "",
     "mapQ": "아카데미아 미술관 베네치아",
     "naverQ": "베네치아 아카데미아 미술관"
    },
    {
     "id": "s5j",
     "name": "산 조르조 마조레 종탑",
     "book": "—",
     "price": "—",
     "when": "제외",
     "info": "보수 공사로 임시 휴관 중",
     "tags": [],
     "memo": "",
     "mapQ": "산 조르조 마조레 종탑 베네치아",
     "naverQ": "베네치아 산 조르조 마조레 종탑"
    },
    {
     "id": "s5k",
     "name": "폰다코 데이 테데스키 옥상",
     "book": "booking.art-events.it",
     "price": "—",
     "when": "제외",
     "info": "백화점 폐점 후 일부 날짜만 개방, 12월 일정 미정",
     "tags": [],
     "memo": "",
     "mapQ": "폰다코 데이 테데스키 옥상 베네치아",
     "naverQ": "베네치아 폰다코 데이 테데스키 옥상"
    }
   ],
   "food": [
    {
     "id": "p5l",
     "name": "Dal Moro's Fresh Pasta To Go",
     "area": "카스텔로",
     "when": "12/27 점심",
     "rating": "4.6",
     "reviews": "약 20,716",
     "what": "생면 파스타 테이크아웃 박스",
     "review": "",
     "tags": [
      [
       "ok",
       "매일 12–18시"
      ],
      [
       "info",
       "11시 전후·14:30 이후 덜 붐빔"
      ],
      [
       "tbd",
       "일요일 영업 출처마다 다름"
      ]
     ],
     "memo": "",
     "mapQ": "Dal Moro's Fresh Pasta To Go Venezia",
     "naverQ": "달 모로 파스타 베네치아"
    },
    {
     "id": "p5m",
     "name": "Osteria Alla Frasca",
     "area": "카나레조(폰다멘테 노베 근처) · Corte de la Carità 5176",
     "when": "12/27 저녁",
     "rating": "4.6",
     "reviews": "1,615",
     "what": "베네치아 해산물 오스테리아. 새우·주키니 뇨키, 해산물 파스타, 참치 스테이크, 티라미수. 가성비가 좋다는 평",
     "review": "",
     "tags": [
      [
       "book",
       "구글맵·홈페이지 예약 · +39 041 241 2585"
      ],
      [
       "ok",
       "매일 12–14:30, 19–22시"
      ],
      [
       "tbd",
       "연말 영업 확인"
      ]
     ],
     "memo": "",
     "mapQ": "Osteria Alla Frasca Corte de la Carità 5176 Venezia",
     "naverQ": "오스테리아 알라 프라스카 베네치아"
    },
    {
     "id": "p5n",
     "name": "Alle Corone (Hotel ai Reali)",
     "area": "카스텔로 · Campo de la Fava 5527",
     "when": "12/27 대안",
     "rating": "4.6",
     "reviews": "542",
     "what": "호텔 안 촛불 조명 레스토랑. 수제 파스타·라비올리·칼라마리. 분위기 있는 저녁",
     "review": "",
     "tags": [
      [
       "book",
       "+39 041 523 2222 · ristoranteallecorone.com"
      ],
      [
       "ok",
       "일 19–22시"
      ],
      [
       "warn",
       "수 휴무"
      ]
     ],
     "memo": "",
     "mapQ": "Alle Corone Campo de la Fava 5527 Venezia",
     "naverQ": "알레 코로네 베네치아"
    },
    {
     "id": "p5o",
     "name": "Ristorantino Al Museo",
     "area": "부라노 · 레이스 박물관 옆 Piazza Galuppi 113",
     "when": "12/28 점심",
     "rating": "4.7",
     "reviews": "1,149",
     "what": "부라노 해산물. 리소토, 해산물 튀김, 바칼라 만테카토, 봉골레. 온열 램프가 있는 파티오",
     "review": "",
     "tags": [
      [
       "book",
       "+39 041 735012 · 홈페이지 예약"
      ],
      [
       "ok",
       "점심 12–15:30"
      ],
      [
       "warn",
       "수 휴무 · 점심만"
      ],
      [
       "tbd",
       "12월 말 휴업 확인"
      ]
     ],
     "memo": "",
     "mapQ": "Ristorantino Al Museo Burano",
     "naverQ": "부라노 알 무세오 레스토랑"
    },
    {
     "id": "p5p",
     "name": "Trattoria alla Maddalena",
     "area": "마조르보(부라노와 다리로 연결) · Fondamenta di Santa Caterina 7/b",
     "when": "12/28 대안",
     "rating": "4.6",
     "reviews": "1,236",
     "what": "운하변 트라토리아. 라군 해산물과 베네치아 가정식. 관광객이 적고 조용합니다",
     "review": "",
     "tags": [
      [
       "book",
       "+39 041 730151"
      ],
      [
       "ok",
       "월 12–15시"
      ],
      [
       "warn",
       "목 휴무 · 평일 점심만"
      ],
      [
       "tbd",
       "겨울 휴업 확인"
      ]
     ],
     "memo": "",
     "mapQ": "Trattoria alla Maddalena Mazzorbo",
     "naverQ": "마조르보 마달레나 트라토리아"
    },
    {
     "id": "p5q",
     "name": "Cantine del Vino già Schiavi",
     "area": "도르소두로(산 트로바소) · Fondamenta Nani 992",
     "when": "12/28 17:30",
     "rating": "4.7",
     "reviews": "3,026",
     "what": "현지인으로 붐비는 와인숍 겸 바카로. 크로스티니 치케티(바칼라, 연어 마스카르포네, 트러플)와 하우스 와인. 아주 저렴합니다",
     "review": "",
     "tags": [
      [
       "ok",
       "월 8:30–14, 16–20:30"
      ],
      [
       "warn",
       "일 휴무 · 토 14:30까지"
      ],
      [
       "info",
       "서서 먹음"
      ]
     ],
     "memo": "",
     "mapQ": "Cantine del Vino già Schiavi Fondamenta Nani 992 Venezia",
     "naverQ": "칸티네 델 비노 스키아비 베네치아"
    },
    {
     "id": "p5r",
     "name": "Osteria Al Squero",
     "area": "도르소두로(곤돌라 조선소 맞은편) · Dorsoduro 943",
     "when": "12/28 대안",
     "rating": "4.7",
     "reviews": "5,716",
     "what": "곤돌라 조선소가 보이는 운하변 치케티 바. 치케티 1개 약 €2.5, 와인 선택지가 많습니다",
     "review": "",
     "tags": [
      [
       "ok",
       "월 10–20:30"
      ],
      [
       "warn",
       "일 휴무 · 토 15시까지"
      ]
     ],
     "memo": "",
     "mapQ": "Osteria Al Squero Dorsoduro 943 Venezia",
     "naverQ": "알 스퀘로 베네치아 치케티"
    },
    {
     "id": "p5s",
     "name": "Trattoria ai Cugnai dal 1911",
     "area": "도르소두로(아카데미아 근처) · Calle Nuova Sant'Agnese 857",
     "when": "12/28 저녁",
     "rating": "4.6",
     "reviews": "2,810",
     "what": "1911년부터 이어온 가족 트라토리아. 새우 스파게티, 해산물 파스타, 칼라마리, 티라미수. 양이 많고 합리적",
     "review": "",
     "tags": [
      [
       "book",
       "전화 +39 041 528 9238"
      ],
      [
       "ok",
       "월 12–14:30, 18–21:30"
      ],
      [
       "warn",
       "화 휴무"
      ],
      [
       "tbd",
       "연말 영업 확인"
      ]
     ],
     "memo": "",
     "mapQ": "Trattoria ai Cugnai dal 1911 Venezia",
     "naverQ": "아이 쿠냐이 베네치아 트라토리아"
    },
    {
     "id": "p5t",
     "name": "Bistrot de Venise",
     "area": "산마르코 · Calle dei Fabbri 4685",
     "when": "12/28 대안",
     "rating": "4.6",
     "reviews": "2,817",
     "what": "베네치아 옛 레시피를 재해석한 레스토랑. 역사 테이스팅 메뉴, 양 라구 파스타, 와인 리스트가 강점. 고가",
     "review": "",
     "tags": [
      [
       "book",
       "OpenTable · +39 041 523 6651"
      ],
      [
       "ok",
       "매일 12–14:40, 18–23시"
      ],
      [
       "info",
       "고가"
      ]
     ],
     "memo": "",
     "mapQ": "Bistrot de Venise Calle dei Fabbri 4685 Venezia",
     "naverQ": "비스트로 드 베니스 베네치아"
    },
    {
     "id": "p5u",
     "name": "All'Arco",
     "area": "리알토 · San Polo 436",
     "when": "",
     "rating": "4.7",
     "reviews": "1,679",
     "what": "바칼라, 호박꽃 크로스티니, 갯가재",
     "review": "해외 후기: 붐비고 영수증을 안 줬다는 지적.",
     "tags": [
      [
       "warn",
       "일 휴무 · 점심만 10–14:30"
      ]
     ],
     "memo": "",
     "mapQ": "All'Arco Venezia",
     "naverQ": "알라르코 베네치아 치케티"
    }
   ],
   "cafe": [
    {
     "id": "p5v",
     "name": "VizioVirtù Cioccolateria",
     "area": "카스텔로(리알토–산마르코 사이) · Calle del Forner 5988",
     "when": "12/27 16:30",
     "rating": "4.7",
     "reviews": "528",
     "what": "수제 초콜릿 가게 겸 카페. 아주 진한 핫초코(클래식·스파이스·다크·라군 소금), 약 €4. 좌석이 넉넉하고 아늑합니다",
     "review": "",
     "tags": [
      [
       "ok",
       "일 10–19시"
      ],
      [
       "warn",
       "월 휴무"
      ],
      [
       "info",
       "아주 진하니 작은 사이즈와 물을 함께"
      ]
     ],
     "memo": "",
     "mapQ": "VizioVirtù Cioccolateria Calle del Forner 5988 Venezia",
     "naverQ": "비지오비르투 베네치아 핫초코"
    },
    {
     "id": "p5w",
     "name": "Pasticceria Bonifacio",
     "area": "카스텔로(산 자카리아, 두칼레 궁전 뒤) · Calle degli Albanesi 4237",
     "when": "12/28 아침",
     "rating": "4.7",
     "reviews": "531",
     "what": "현지인이 찾는 바 카운터식 제과점. 아몬드·초콜릿 페이스트리, 피스타치오 칸놀리. 저렴합니다",
     "review": "",
     "tags": [
      [
       "ok",
       "월 6–17:30"
      ],
      [
       "warn",
       "목 휴무"
      ],
      [
       "info",
       "서서 먹는 작은 가게"
      ]
     ],
     "memo": "",
     "mapQ": "Pasticceria Bonifacio Calle degli Albanesi 4237 Venezia",
     "naverQ": "파스티체리아 보니파치오 베네치아"
    },
    {
     "id": "p5x",
     "name": "Pasticceria Tonolo",
     "area": "도르소두로 · Calle San Pantalon 3764",
     "when": "12/27 낮 · 12/29 아침",
     "rating": "4.6",
     "reviews": "3,043",
     "what": "베네치아 대표 노포 제과점. 크림 퍼프, 초콜릿 코르네토. 카운터에서 먹고 나중에 계산합니다. 저렴",
     "review": "",
     "tags": [
      [
       "ok",
       "화 7:30–19시 · 일 13시까지"
      ],
      [
       "warn",
       "월 휴무"
      ],
      [
       "info",
       "좌석 없음"
      ]
     ],
     "memo": "",
     "mapQ": "Pasticceria Tonolo Calle San Pantalon 3764 Venezia",
     "naverQ": "토놀로 베네치아 빵집"
    },
    {
     "id": "p5y",
     "name": "Panificio Giovanni Volpe",
     "area": "카나레조(게토, 역에서 도보 10분) · Calle del Ghetto Vecchio 1143",
     "when": "12/29 아침 대안",
     "rating": "4.7",
     "reviews": "368",
     "what": "1950년대부터 가족이 운영하는 코셔 베이커리. 크루아상, 슈트루델, 쿠키. 테이크아웃",
     "review": "",
     "tags": [
      [
       "ok",
       "화 7–19시"
      ],
      [
       "warn",
       "일 휴무"
      ],
      [
       "tbd",
       "커피 판매 미확인"
      ]
     ],
     "memo": "",
     "mapQ": "Panificio Giovanni Volpe Ghetto Vecchio 1143 Venezia",
     "naverQ": "볼페 베이커리 베네치아 게토"
    }
   ],
   "gelato": [
    {
     "id": "p5z",
     "name": "Gelatoteca Suso",
     "area": "리알토 · Sotoportego de la Bissa",
     "when": "12/27 밤",
     "rating": "4.6",
     "reviews": "9,369",
     "what": "피스타치오, 오페라, 수소(캐러멜)",
     "review": "한국(polle 4건): '기다린 만큼 맛있다', '다른 곳보다 쫀득하다', '단 편'.",
     "tags": [
      [
       "ok",
       "지점 매일 9:30–23시"
      ]
     ],
     "memo": "",
     "mapQ": "Gelatoteca Suso Venezia",
     "naverQ": "수소 젤라또 베네치아"
    },
    {
     "id": "p60",
     "name": "Venchi",
     "area": "Calle dei Fabbri",
     "when": "",
     "rating": "4.8",
     "reviews": "7,175",
     "what": "초콜릿 계열",
     "review": "",
     "tags": [],
     "memo": "",
     "mapQ": "Venchi Calle dei Fabbri Venezia",
     "naverQ": "벤키 베네치아"
    }
   ]
  }
 },
 "guides": [
  {
   "id": "move",
   "title": "교통",
   "sub": "기차 예매, 공항철도, 도시별 대중교통",
   "icon": "train",
   "html": "<p class=\"lead\">도시 간 이동은 고속열차(트렌이탈리아의 Frecciarossa, 민영 Italo), 시내는 메트로·버스·수상버스와 도보입니다. 세 도시 모두 중심부는 걸어서 다닐 만합니다.</p> <h3 class=\"sub3\">이 일정의 기차</h3> <div class=\"tbl\"><table> <thead><tr><th>날짜</th><th>구간</th><th>소요</th><th>최저가(공시)</th><th>메모</th></tr></thead> <tbody> <tr><td class=\"n\">12/24 목</td><td>Roma Termini → Firenze SMN</td><td class=\"n\">1h35 안팎</td><td class=\"n\">€14.90~</td><td>이브 낮 열차는 정상 운행. 오전에 도착해야 두오모 성당을 볼 수 있습니다</td></tr> <tr><td class=\"n\">12/26 토</td><td>Firenze SMN ↔ Pisa Centrale (지역열차 왕복)</td><td class=\"n\">50–80분</td><td class=\"n\">편도 약 €9</td><td>고정 요금, 좌석 지정 없음, 당일 구매. 공휴일이라 평소보다 편수가 적습니다</td></tr> <tr><td class=\"n\">12/27 일</td><td>Firenze SMN → Venezia S. Lucia</td><td class=\"n\">약 2h05</td><td class=\"n\">€18.90~</td><td>정가 약 €57</td></tr> <tr><td class=\"n\">12/29 화</td><td>Venezia S. Lucia → Roma Termini</td><td class=\"n\">3h45–4h</td><td class=\"n\">€29.90~</td><td>정가(Base) €92–99. 변경 가능한 Base 또는 Italo Flex 권장</td></tr> <tr><td class=\"n\">12/30 수</td><td>Roma Termini → 피우미치노 공항 (Leonardo Express)</td><td class=\"n\">32분</td><td class=\"n\">€14</td><td>15분 간격, 직행</td></tr> </tbody> </table></div> <div class=\"grid2\"> <div class=\"block\"> <h3>예매와 운임</h3> <ul> <li>트렌이탈리아(trenitalia.com/앱)와 Italo(italotreno.com/앱)에서 각각 예매합니다. 둘을 한 화면에서 비교하려면 Trainline을 쓰세요.</li> <li>요금은 항공권처럼 변동하고 일찍 살수록 쌉니다. 트렌이탈리아는 보통 4개월 전에 판매를 시작하지만, 12월 시간표 개편 직후 열차는 1–2개월 전에야 열리기도 합니다.</li> <li>트렌이탈리아 <b>Base</b>는 출발 전 변경이 무제한이고 환불은 20% 공제 후 가능합니다. <b>Economy</b>는 1회 변경(차액 지불)만 되고 환불은 안 됩니다. <b>Super Economy</b>는 변경과 환불 모두 안 됩니다.</li> <li>Italo <b>Flex</b>는 출발 3분 전까지 무제한 변경, 80% 환불됩니다. <b>Economy</b>는 수수료 20%로 변경, 40% 환불. <b>Low Cost</b>는 72시간 전까지만 변경되고 환불은 안 됩니다.</li> <li>해외 카드는 3D Secure 인증에서 막힐 수 있습니다. 출국 전에 카드사 설정을 확인하세요.</li> </ul> </div> <div class=\"block\"> <h3>타는 법</h3> <ul> <li>고속열차는 좌석이 지정된 실명 티켓입니다. 앱의 PNR 코드만 보여 주면 되고 인쇄나 개찰은 필요 없습니다. 검표원이 여권을 볼 수 있습니다.</li> <li>종이로 된 지역열차 티켓만 탑승 전에 역 개찰기에 찍어야 합니다. 안 찍으면 벌금이 €50부터입니다. 앱에서 산 지역열차 티켓은 체크인 안내가 나오면 탑승 전에 앱에서 체크인하세요.</li> <li>짐은 무게 제한이 없습니다. 머리 위 선반이나 객차 끝 거치대에 두는데, 큰 캐리어는 객차 끝 자리가 먼저 차니 일찍 타세요.</li> <li>로마 테르미니는 플랫폼 입구 게이트에서 티켓을 확인합니다. 발권기 앞에서 도와주겠다며 다가오는 사람은 거절하세요.</li> <li>60분 이상 늦거나 취소되면 환불 또는 무료 대체 열차를 받을 수 있습니다. 1–2시간 지연은 25%, 2시간 이상은 50% 보상입니다.</li> </ul> </div> </div> <h3 class=\"sub3\">피우미치노 공항 ↔ 로마 시내</h3> <div class=\"tbl\"><table> <thead><tr><th>수단</th><th>요금</th><th>시간</th><th>메모</th></tr></thead> <tbody> <tr><td><b>Leonardo Express</b> (테르미니 직행)</td><td class=\"n\">€14</td><td class=\"n\">32분</td><td>공항 출발 05:38–23:27, 테르미니 출발 04:50–23:05. 개찰구에서 컨택리스 카드 결제(1장에 1명). 시내 교통권으로는 탈 수 없습니다.</td></tr> <tr><td>FL1 지역열차</td><td class=\"n\">미확인</td><td class=\"n\">—</td><td>Trastevere·Ostiense·Tiburtina 경유. 평일 15분, 주말 30분 간격</td></tr> <tr><td>공항버스 (Terravision, SIT)</td><td class=\"n\">€4–6</td><td class=\"n\">45–65분</td><td>싸지만 교통 체증 영향을 받습니다</td></tr> <tr><td>공식 택시</td><td class=\"n\">€55 정액</td><td class=\"n\">—</td><td>성벽 안(테르미니, 몬티 포함). 흰 차, 지붕 TAXI 표시, 문에 면허번호가 있는 차만</td></tr> </tbody> </table></div> <div class=\"grid2\"> <div class=\"block\" data-city=\"roma\"> <h3>로마 시내</h3> <ul> <li>메트로 A선은 바티칸(Ottaviano)과 스페인 계단(Spagna), B선은 콜로세움(Colosseo)으로 갑니다. 두 노선은 테르미니에서 만납니다.</li> <li>1회권(BIT) €1.50은 100분 동안 버스·트램 무제한에 메트로 1회. 24시간권 €8.50, 48시간권 €15, 72시간권 €22.</li> <li><b>탭앤고:</b> 개찰구나 버스 단말기에 컨택리스 카드를 대면 €1.50이 결제됩니다. 하루에 여러 번 타면 최적 요금이 자동 적용됩니다(상한액 미확인). 1인 1카드.</li> <li>종이표는 타자마자 개찰하세요. 무임승차 벌금은 최대 €140입니다.</li> <li>로마 패스(48시간 €38)는 이 일정에서 이득이 적습니다.</li> <li><b>12/30 짐 보관:</b> 체크아웃 후 호텔에 맡기고 보르게세 미술관을 본 뒤 찾아서 공항으로 갑니다.</li> <li><b>소매치기:</b> 테르미니역, 64번 버스, 메트로 A선에서 문이 닫히기 직전에 몰려 타는 수법을 조심하세요.</li> </ul> </div> <div class=\"block\" data-city=\"venezia\"> <h3>베네치아 바포레토(수상버스)</h3> <ul> <li>1회권 €9.50(75분), 24시간권 €25, <b>48시간권 €35</b>, 72시간권 €45 (2025년 요금, 2026년 미확인).</li> <li>이 일정은 12/27 낮 첫 탑승 때 48시간권을 시작하면 12/29 오전 역으로 가는 배까지 됩니다. 4–5번만 타도 1회권보다 쌉니다.</li> <li>탈 때마다 정류장 단말기에 카드를 태그해 초록불을 확인하세요.</li> <li>세 변 합 150cm 이하 짐 1개와 작은 가방은 무료입니다. 그보다 크면 추가 요금이 있습니다.</li> <li>노선: <b>1번</b> 대운하 완행(역→산마르코 최대 45분), <b>2번</b> 대운하 급행, <b>4.1/4.2번</b> 섬 외곽 순환(폰다멘테 노베 경유), <b>12번</b> 폰다멘테 노베→무라노→부라노(겨울 시간표는 폰다멘테 노베에서 매시 10분·40분 출발, 부라노까지 약 40분).</li> <li>수상택시는 시내 €70부터입니다.</li> <li>6–29세는 Rolling Venice 카드(€6)로 72시간권을 €27에 살 수 있습니다.</li> </ul> </div> <div class=\"block\" data-city=\"firenze\"> <h3>피렌체 시내</h3> <ul> <li>역사지구는 걸어서 30분이면 가로지릅니다. 이 일정은 거의 도보로 됩니다.</li> <li>시내버스 1회권 €2.00(90분, 트램 포함), 차내에서 사면 €3.00. 컨택리스 탭(Tip Tap)은 1인 1카드.</li> <li>미켈란젤로 광장은 버스로 가거나 산 니콜로 쪽 계단으로 걸어 올라갑니다(노선 번호는 현지 앱으로 확인).</li> <li><b>12/25:</b> 성탄절에는 버스가 평소보다 적게 다닙니다(시간표 미확인). 역사지구는 걸어서 다니면 됩니다.</li> </ul> </div> <div class=\"block\"> <h3>파업과 연휴</h3> <ul> <li>파업 공지는 교통부 사이트 <a href=\"https://scioperi.mit.gov.it\" target=\"_blank\" rel=\"noopener\">scioperi.mit.gov.it</a>에서 확인합니다. 12/4 총파업은 여행 기간과 겹치지 않습니다.</li> <li>이탈리아는 연말연시를 교통 파업 금지기간으로 둡니다. 정확한 날짜는 미확인입니다.</li> <li>파업 중에도 일부 장거리 열차는 보장 운행되고, 지역교통은 평일 06–09시, 18–21시에 운행됩니다.</li> <li>12/24 저녁부터 12/26까지는 열차와 시내교통이 평소보다 적습니다.</li> </ul> </div> </div>"
  },
  {
   "id": "stay",
   "title": "숙소",
   "sub": "지역 추천과 호텔 후보, 숙박세",
   "icon": "bed",
   "html": "<p class=\"lead\">세 도시 모두 기차역 근처를 골랐습니다. 짐을 끌고 이동하는 날이 네 번이기 때문입니다. 평점은 HotelsCombined·KAYAK 집계(10점 만점)이고, 가격은 11월 날짜 1박 샘플이라 12월 말에는 더 비쌉니다. 숙박세는 1인 1박 기준으로 현장에서 따로 냅니다.</p> <div class=\"hotels\"> <div class=\"hcol\" data-city=\"roma\"> <h3>로마 · 3박 + 1박</h3> <p class=\"area-pick\"><b>테르미니 서쪽(레푸블리카, Via Firenze·Torino)</b>을 권합니다. 12/24·12/29 기차와 공항철도가 모두 테르미니에서 출발합니다. 첫 3박과 마지막 1박을 같은 호텔로 잡으면 편합니다. 역 남쪽(에스퀼리노)은 밤 분위기가 좋지 않습니다.</p> <div class=\"hotel\"><span class=\"hn\">iQ Hotel Roma <span class=\"tag ok\">추천</span></span><span class=\"hm\">4성 · Via Firenze 8 · 9.4 (4,012) · ₩213,000~</span><p>역 서쪽이라 비교적 조용하고 시설이 새것입니다.</p></div> <div class=\"hotel\"><span class=\"hn\">The Hive Hotel</span><span class=\"hm\">4성 · Via Torino 6 · 8.7 (7,100) · ₩171,000~211,000</span><p>테르미니 도보 5분대, 루프탑 바.</p></div> <div class=\"hotel\"><span class=\"hn\">Hotel Grifo</span><span class=\"hm\">3성 · 몬티 · 9.0 (3,361) · ₩155,000~180,000</span><p>콜로세움까지 걸어가는 가성비 숙소. 역까지 10–15분 언덕길이 단점입니다.</p></div> <div class=\"hotel\"><span class=\"hn\">Albergo del Senato</span><span class=\"hm\">판테온 앞 · 9.1 (1,307) · ₩184,000~513,000</span><p>성탄 동선은 최고지만 역에서 멀어 짐 이동이 번거롭습니다.</p></div> <p class=\"tax\">숙박세: 3성 €6, 4성 €7.50, 5성 €10. 4성 2인 4박이면 €60.</p> </div> <div class=\"hcol\" data-city=\"firenze\"> <h3>피렌체 · 3박</h3> <p class=\"area-pick\"><b>SMN역과 두오모 사이(Via della Scala, SMN 광장)</b>를 권합니다. 중앙시장과 주요 식당이 도보권입니다. Via Nazionale, Via Faenza 쪽은 밤에 다소 어수선합니다.</p> <div class=\"hotel\"><span class=\"hn\">C-Hotel Ambasciatori <span class=\"tag ok\">추천</span></span><span class=\"hm\">SMN역 정면 · 8.9 (12,083) · ₩227,000~</span><p>공식 웹으로 예약하면 체크아웃 후 짐 보관과 13시 레이트 체크아웃(가능할 때).</p></div> <div class=\"hotel\"><span class=\"hn\">C-Hotels Diplomat</span><span class=\"hm\">SMN 도보권 · 9.2 (5,652) · ₩240,000~</span><p>같은 그룹, 같은 혜택.</p></div> <div class=\"hotel\"><span class=\"hn\">Hotel Adler Cavalieri</span><span class=\"hm\">4성 · Via della Scala 40 · 8.9 (4,271) · ₩259,000~</span><p>역과 두오모 사이. 사우나, 24시간 프런트.</p></div> <div class=\"hotel\"><span class=\"hn\">Hotel Santa Maria Novella</span><span class=\"hm\">4성 · SMN 광장 · 9.3 (2,446) · ₩500,000~</span><p>상위 예산.</p></div> <p class=\"tax\">숙박세: 3성 €6, 4성 €7, 5성 €8. 4성 2인 3박이면 €42.</p> </div> <div class=\"hcol\" data-city=\"venezia\"> <h3>베네치아 · 2박</h3> <p class=\"area-pick\"><b>산타 루치아역 근처 카나레조, 산타 크로체</b>를 권합니다. 다리를 거의 건너지 않고 짐을 옮길 수 있습니다. 메스트레는 싸지만 매번 기차를 타야 하고 밤 풍경을 놓칩니다.</p> <div class=\"hotel\"><span class=\"hn\">Hotel Antiche Figure <span class=\"tag ok\">추천</span></span><span class=\"hm\">3성 · 역 맞은편 · 9.3 (2,283) · ₩168,000~</span><p>역에서 대운하 건너 바로 앞입니다.</p></div> <div class=\"hotel\"><span class=\"hn\">Hotel Abbazia</span><span class=\"hm\">3성 · 역 0.3km · 9.0 (5,598) · ₩148,000~</span><p>역에서 가깝고 리뷰가 많습니다.</p></div> <div class=\"hotel\"><span class=\"hn\">Hotel Al Ponte Mocenigo</span><span class=\"hm\">3성 · 리알토 0.5km · 9.3 (1,593) · ₩117,000~</span><p>가성비 좋고 리알토와 가깝습니다. 역에서 1km라 짐 이동은 조금 깁니다.</p></div> <div class=\"hotel\"><span class=\"hn\">Hotel Moresco</span><span class=\"hm\">4성 · 피아찰레 로마 근처 · 9.6 (1,690) · ₩236,000~</span><p>평점이 가장 높은 상위 예산 선택지.</p></div> <p class=\"tax\">숙박세(12월 성수기, 본섬): 3성 €3.50, 4성 €4.50. 2025년 4월 요금표 기준.</p> </div> </div>"
  },
  {
   "id": "care",
   "title": "주의사항",
   "sub": "입국, 날씨, 연휴, 소매치기, 긴급 연락처",
   "icon": "shield",
   "html": "<div class=\"grid2\"> <div class=\"block\"> <h3>입국 (한국 여권)</h3> <ul> <li><b>EES</b>가 2026년 4월부터 전면 시행 중입니다. 여권 도장 대신 지문과 얼굴을 등록하고, 첫 입국 때 줄이 길어질 수 있습니다.</li> <li>한국 전자여권(만 12세 이상)은 피우미치노 입국·출국 때 e-gate를 쓸 수 있습니다.</li> <li><b>ETIAS(유럽 여행허가)</b>는 아직 시행되지 않아 12월 입국에는 필요 없습니다. 2027년 시행이 유력합니다. 지금 대행 사이트에서 결제하지 마세요. 공식 포털은 travel-europe.europa.eu/etias 하나뿐입니다.</li> </ul> </div> <div class=\"block\"> <h3>12월 날씨</h3> <div class=\"tbl\" style=\"margin-top:10px\"><table style=\"min-width:0\"> <thead><tr><th>도시</th><th>최고</th><th>최저</th><th>비 오는 날</th></tr></thead> <tbody> <tr><td>로마</td><td class=\"n\">12.7°C</td><td class=\"n\">4.7°C</td><td class=\"n\">9.4일</td></tr> <tr><td>피렌체</td><td class=\"n\">11.4°C</td><td class=\"n\">2.6°C</td><td class=\"n\">9.6일</td></tr> <tr><td>베네치아</td><td class=\"n\">8.3°C</td><td class=\"n\">1.0°C</td><td class=\"n\">5.9일</td></tr> </tbody> </table></div> <p class=\"muted\" style=\"font-size:13px;margin-top:8px\">1991–2020 평년값. 해는 16:30–16:45에 지니 야외 일정은 오후 4시 전에 끝내도록 짰습니다. 베네치아는 습하고 바람이 차니 방수 신발을 챙기세요.</p> </div> <div class=\"block\"> <h3>연휴 영향</h3> <ul> <li>12/24 오후부터 12/26까지 상점과 식당이 많이 쉽니다. 12/25는 박물관이 거의 모두 휴관입니다.</li> <li>피렌체는 12/25에 국립·시립 박물관과 두오모가 모두 쉬고 성당 몇 곳만 엽니다(2025년 기준). 버스도 평소보다 적습니다.</li> <li>12월 말에 겨울 휴가로 쉬는 식당이 있습니다. 연말에도 연다고 공식적으로 밝힌 곳은 로마의 Pastasciutta, Cantina e Cucina, Tonnarello뿐이고, 나머지는 12월 중순에 구글 지도 휴일 영업시간이나 전화로 확인하세요.</li> </ul> </div> <div class=\"block\"> <h3>식당과 결제</h3> <ul> <li>자릿세(코페르토)는 1인 €1–4가 붙습니다. 팁은 의무가 아니고 잔돈을 두는 정도면 됩니다.</li> <li>카페는 바에 서서 마시면 훨씬 쌉니다. 먼저 계산대에서 결제하고 영수증을 바에 내는 곳이 많습니다.</li> <li>카드는 대부분 되지만 Trattoria Mario처럼 현금만 받는 곳이 있습니다. 은행 ATM에서 소액을 뽑아 두세요.</li> <li><b>택스리펀:</b> 한 매장 €70 이상, 여권 지참, 물건은 사용하지 않은 상태로 출국 공항 세관 확인.</li> </ul> </div> <div class=\"block\"> <h3>소매치기와 사기</h3> <ul> <li>대사관이 지정한 위험 지역은 테르미니, 스페인 광장, 콜로세움 주변입니다.</li> <li>손목에 팔찌를 묶고 돈을 요구하거나, 장미나 선물을 건넨 뒤 돈을 달라고 하는 경우가 있습니다. 손을 내주지 마세요.</li> <li>사복 경찰이라며 지갑을 보자고 하면 신분증을 먼저 요구하세요.</li> <li>휴대폰은 테이블 위에 두지 말고, 가방은 앞으로 메세요.</li> </ul> </div> <div class=\"block\"> <h3>긴급 연락처</h3> <ul> <li>통합 긴급번호 112, 경찰 113, 구급 118, 소방 115</li> <li>주이탈리아 대한민국 대사관: Via Piemonte 54, Roma · <span class=\"mono\">+39-06-4204021</span> (평일 09:30–12:00, 14:00–16:30)</li> <li>근무시간 외 긴급: <span class=\"mono\">+39-335-185-0499</span></li> <li>영사콜센터(24시간): <span class=\"mono\">+82-2-3210-0404</span></li> </ul> </div> </div>"
  },
  {
   "id": "src",
   "title": "출처",
   "sub": "조사 범위와 확인하지 못한 정보",
   "icon": "book",
   "html": "<ul class=\"plain\"> <li><b>네이버 블로그:</b> 조사 환경에서 blog.naver.com과 search.naver.com 접근이 막혀 직접 읽지 못했습니다. 한국어 후기는 트립스토어, 브런치, 클리앙, 디시, 디에디트, 다음, 야놀자, 트립닷컴, polle에서 가져왔고, 각 카드에 출처를 적었습니다. 카드의 '네이버 블로그 후기' 버튼으로 최신 후기를 확인하세요.</li> <li><b>구글 평점:</b> Wanderlog와 Restaurant Guru에 표시된 구글 지도 수치(2026년 10–11월)입니다. 실제 지도 앱 수치와 조금 다를 수 있습니다.</li> <li><b>공식 출처:</b> <a href=\"https://www.museivaticani.va\" target=\"_blank\" rel=\"noopener\">바티칸 박물관</a>, <a href=\"https://colosseo.it/en/visit/opening-times-and-tickets/\" target=\"_blank\" rel=\"noopener\">콜로세움 고고학 공원</a>, <a href=\"https://www.basilicasanmarco.it/\" target=\"_blank\" rel=\"noopener\">산마르코 대성당 요금표</a>, <a href=\"https://palazzoducale.visitmuve.it/en/visitor-information/\" target=\"_blank\" rel=\"noopener\">두칼레 궁전</a>, <a href=\"https://www.feelflorence.it/\" target=\"_blank\" rel=\"noopener\">피렌체 관광청 박물관 운영표(2026-06)</a>, <a href=\"https://www.feelflorence.it/sites/default/files/2025-12/Orari%20Natale%202025.pdf\" target=\"_blank\" rel=\"noopener\">피렌체 2025 성탄 운영표</a>, <a href=\"https://duomo.firenze.it/it/news/11347/chiusure-dei-monumenti-nel-periodo-natalizio\" target=\"_blank\" rel=\"noopener\">두오모 성탄 휴관 공지</a>, <a href=\"https://www.opapisa.it/en/tickets/a-few-words-of-advice-before-you-buy-your-ticket/\" target=\"_blank\" rel=\"noopener\">피사 사탑 이용 규정</a>, <a href=\"https://www.opapisa.it/en/opening-and-closing-time/action~month/exact_date~1-12-2026/\" target=\"_blank\" rel=\"noopener\">피사 2026년 12월 운영 달력</a>, <a href=\"https://www.museivaticani.va/content/dam/museivaticani/pdf/utilities/calendario_musei.pdf\" target=\"_blank\" rel=\"noopener\">바티칸 박물관 2026 달력</a>, <a href=\"https://www.basilicasanpietro.va/it/orari\" target=\"_blank\" rel=\"noopener\">성 베드로 대성당 시간</a>, <a href=\"https://www.fontanaditrevi.roma.it\" target=\"_blank\" rel=\"noopener\">트레비 분수</a>, <a href=\"https://actv.avmspa.it/sites/default/files/avm/navigazione/Actv_nav_linea_12.pdf\" target=\"_blank\" rel=\"noopener\">ACTV 12번 시간표</a>, <a href=\"https://www.trenitalia.com/en/services/leonardo-express.html\" target=\"_blank\" rel=\"noopener\">Leonardo Express</a>, <a href=\"https://www.adr.it/pax-fco-taxi\" target=\"_blank\" rel=\"noopener\">공항 택시 요금</a>, <a href=\"https://www.atac.roma.it/en/tickets-and-passes/tickets\" target=\"_blank\" rel=\"noopener\">ATAC 요금</a>, <a href=\"https://www.at-bus.it/en/ticket\" target=\"_blank\" rel=\"noopener\">피렌체 버스</a>, <a href=\"https://home-affairs.ec.europa.eu/policies/schengen/smart-borders/entry-exit-system_en\" target=\"_blank\" rel=\"noopener\">EU EES</a>, <a href=\"https://overseas.mofa.go.kr/it-ko/brd/m_24772/view.do?seq=1330070\" target=\"_blank\" rel=\"noopener\">주이탈리아 대사관</a>.</li> <li><b>2026년 공식 정보가 없어 2025년 기준을 쓴 것:</b> 피렌체 성탄 운영시간(관광안내소 2025년 12/24–26 표), 두오모 성탄 전야 미사(2024년 23:00), 나보나 마켓, 베네치아 바포레토 요금, 곤돌라 요금, 베네치아 숙박세, 바티칸 박물관 가격(2024).</li> <li><b>피사:</b> 사탑 공식 가격표가 이미지라 읽지 못해서 €20은 그동안의 공시가와 여행 사이트 기준입니다. 12월과 12/26 공휴일 운영시간, 피렌체–피사 운임, LAM Rossa 요금도 여행 사이트 기준이라 결제 화면과 현지에서 확인하세요.</li> <li><b>평점 기준:</b> 식당·카페·젤라토는 구글 평점 4.6 이상, 리뷰 300개 이상인 곳만 남겼습니다. 수치는 Wanderlog·Restaurant Guru에 표시된 구글 값(2026년 11월)이라 지도 앱과 조금 다를 수 있습니다. 명소는 콘타리니 델 보볼로(4.5)와 무라노(4.5)를 뺐고 나머지는 모두 4.6 이상입니다.</li> <li><b>숙소:</b> HotelsCombined(로마·베네치아)와 KAYAK(피렌체) 집계 평점과 11월 샘플 가격입니다.</li> </ul>"
  }
 ]
};
