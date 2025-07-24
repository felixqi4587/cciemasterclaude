// CCIE Master Pricing Configuration
// Reusing the original pricing logic from promotions-config.js

export interface PricingConfig {
  basePrices: {
    [key: string]: number
  }
  promotions: {
    [month: number]: {
      theme: string
      title: string
      emoji: string
      discount: number
      discountAmount: string
      holidayName: string
      holidayPeriod: string
      holidayContext: string
      discountDisplay: string
    }
  }
}

export const pricingConfig: PricingConfig = {
  basePrices: {
    'Enterprise Infrastructure': 3999,
    'Security': 4299,
    'Service Provider': 4499,
    'DevNet Expert': 4799
  },
  
  promotions: {
    1: {
      theme: "New Year",
      title: "New Year, New Career Special",
      emoji: "🎊",
      discount: 0.35,
      discountAmount: "$1,400",
      holidayName: "New Year & Fresh Start",
      holidayPeriod: "New Year Month & Career Fresh Start",
      holidayContext: "New Year, new career goals - start your CCIE journey",
      discountDisplay: "New Year Special: Save 35% (approx. $1,400)"
    },
    2: {
      theme: "Valentine's Day",
      title: "Love Your Career Special",
      emoji: "💝",
      discount: 0.33,
      discountAmount: "$1,320",
      holidayName: "Valentine's Day & Love Learning",
      holidayPeriod: "Valentine's Day & February Learning Month",
      holidayContext: "Valentine's Day - fall in love with technology",
      discountDisplay: "Valentine's Special: Save 33% (approx. $1,320)"
    },
    3: {
      theme: "Spring Break",
      title: "Spring Career Launch",
      emoji: "🌸",
      discount: 0.37,
      discountAmount: "$1,480",
      holidayName: "Spring Break & Career Bloom",
      holidayPeriod: "Spring Break & Career Growth Season",
      holidayContext: "Spring Break - let your career bloom",
      discountDisplay: "Spring Special: Save 37% (approx. $1,480)"
    },
    4: {
      theme: "Easter",
      title: "Fresh Start Special",
      emoji: "🐰",
      discount: 0.35,
      discountAmount: "$1,400",
      holidayName: "Easter & New Beginnings",
      holidayPeriod: "Easter Season & New Career Beginnings",
      holidayContext: "Easter - time for new beginnings in your career",
      discountDisplay: "Easter Special: Save 35% (approx. $1,400)"
    },
    5: {
      theme: "Mother's Day",
      title: "Honor & Achievement Special",
      emoji: "🌹",
      discount: 0.34,
      discountAmount: "$1,360",
      holidayName: "Mother's Day & Career Growth",
      holidayPeriod: "Mother's Day & May Career Month",
      holidayContext: "Mother's Day - invest in your professional growth",
      discountDisplay: "Mother's Day Special: Save 34% (approx. $1,360)"
    },
    6: {
      theme: "Father's Day",
      title: "Father's Day Career Gift",
      emoji: "👔",
      discount: 0.36,
      discountAmount: "$1,440",
      holidayName: "Father's Day & Graduation",
      holidayPeriod: "Father's Day & June Graduation Season",
      holidayContext: "Father's Day - the best career gift for dad",
      discountDisplay: "Father's Day Special: Save 36% (approx. $1,440)"
    },
    7: {
      theme: "Independence Day",
      title: "Independence Day Freedom Special",
      emoji: "🇺🇸",
      discount: 0.39,
      discountAmount: "$1,560",
      holidayName: "Independence Day & Summer Learning",
      holidayPeriod: "Independence Day & Summer Intensive",
      holidayContext: "Independence Day - achieve career independence",
      discountDisplay: "July 4th Special: Save 39% (approx. $1,560)"
    },
    8: {
      theme: "Back to School",
      title: "Back to School Special",
      emoji: "🎒",
      discount: 0.38,
      discountAmount: "$1,520",
      holidayName: "Back to School & Professional Development",
      holidayPeriod: "Back to School & August Learning Month",
      holidayContext: "Back to School - advance your professional education",
      discountDisplay: "Back to School Special: Save 38% (approx. $1,520)"
    },
    9: {
      theme: "Labor Day",
      title: "Labor Day Career Investment",
      emoji: "👷",
      discount: 0.35,
      discountAmount: "$1,400",
      holidayName: "Labor Day & Career Advancement",
      holidayPeriod: "Labor Day & September Career Month",
      holidayContext: "Labor Day - elevate your professional skills",
      discountDisplay: "Labor Day Special: Save 35% (approx. $1,400)"
    },
    10: {
      theme: "Halloween",
      title: "Cybersecurity Month Special",
      emoji: "🎃",
      discount: 0.41,
      discountAmount: "$1,640",
      holidayName: "Halloween & Spooky Good Deals",
      holidayPeriod: "Halloween Season & October Specials",
      holidayContext: "Halloween - scary good career opportunities",
      discountDisplay: "Halloween Special: Save 41% (approx. $1,640)"
    },
    11: {
      theme: "Thanksgiving",
      title: "Black Friday Mega Deal",
      emoji: "🦃",
      discount: 0.45,
      discountAmount: "$1,800",
      holidayName: "Thanksgiving & Black Friday",
      holidayPeriod: "Thanksgiving & Black Friday Mega Sale",
      holidayContext: "Thanksgiving & Black Friday - biggest savings of the year",
      discountDisplay: "Black Friday Special: Save 45% (approx. $1,800)"
    },
    12: {
      theme: "Christmas",
      title: "Holiday Career Gift Special",
      emoji: "🎄",
      discount: 0.40,
      discountAmount: "$1,600",
      holidayName: "Christmas & Year-End Special",
      holidayPeriod: "Christmas Season & Year-End Celebration",
      holidayContext: "Christmas - give yourself the gift of career advancement",
      discountDisplay: "Christmas Special: Save 40% (approx. $1,600)"
    }
  }
}

export function getCurrentPromotion() {
  const currentMonth = new Date().getMonth() + 1
  return pricingConfig.promotions[currentMonth] || pricingConfig.promotions[1]
}

export function calculatePrice(courseKey: string) {
  const basePrice = pricingConfig.basePrices[courseKey] || 3999
  const promotion = getCurrentPromotion()
  const discountedPrice = Math.round(basePrice * (1 - promotion.discount))
  const savings = basePrice - discountedPrice
  const discountPercent = Math.round(promotion.discount * 100)

  return {
    originalPrice: basePrice,
    discountedPrice,
    savings,
    discountPercent,
    promotion
  }
}

export const courseData = [
  {
    key: 'Enterprise Infrastructure',
    title: 'CCIE Enterprise Infrastructure',
    subtitle: 'Real exam question assistance',
    description: '4-month dedicated service providing real CCIE Enterprise Infrastructure exam questions and lab scenarios.',
    icon: '🌐',
    badge: 'Most Popular',
    badgeColor: 'bg-green-500',
    features: [
      'Real CCIE exam questions and solutions',
      '360 hours of lab practice over 4 months',
      'Daily 8-hour instructor availability',
      'Service extension if exam blueprint changes',
      'Actual exam scenarios and troubleshooting',
      'Direct help with lab preparation',
      'Current exam materials and updates'
    ]
  },
  {
    key: 'Security',
    title: 'CCIE Security',
    subtitle: 'Real security exam assistance',
    description: '4-month dedicated service providing real CCIE Security exam questions and lab scenarios.',
    icon: '🔒',
    badge: 'Advanced',
    badgeColor: 'bg-red-500',
    features: [
      'Real CCIE Security exam questions and solutions',
      '360 hours of security lab practice over 4 months',
      'Daily 8-hour instructor availability',
      'Service extension if exam blueprint changes',
      'Actual security exam scenarios',
      'Direct help with security lab preparation',
      'Current security exam materials and updates'
    ]
  },
  {
    key: 'Service Provider',
    title: 'CCIE Service Provider',
    subtitle: 'Real SP exam assistance',
    description: '4-month dedicated service providing real CCIE Service Provider exam questions and lab scenarios.',
    icon: '🌍',
    badge: 'Specialized',
    badgeColor: 'bg-blue-500',
    features: [
      'Real CCIE SP exam questions and solutions',
      '360 hours of SP lab practice over 4 months',
      'Daily 8-hour instructor availability',
      'Service extension if exam blueprint changes',
      'Actual SP exam scenarios and BGP/MPLS labs',
      'Direct help with service provider lab preparation',
      'Current SP exam materials and updates'
    ]
  },
  {
    key: 'DevNet Expert',
    title: 'DevNet Expert',
    subtitle: 'Real DevNet exam assistance',
    description: '4-month dedicated service providing real DevNet Expert exam questions and automation lab scenarios.',
    icon: '💻',
    badge: 'Expert Level',
    badgeColor: 'bg-purple-500',
    features: [
      'Real DevNet Expert exam questions and solutions',
      '360 hours of automation lab practice over 4 months',
      'Daily 8-hour instructor availability',
      'Service extension if exam blueprint changes',
      'Actual DevNet exam scenarios and coding challenges',
      'Direct help with automation lab preparation',
      'Current DevNet exam materials and updates'
    ]
  }
]