import {
  englishNumbers,
  persianNumbers,
  arabicNumbers,
  englishNumbersFinder,
  persianNumbersFinder,
  arabicNumbersFinder,
} from 'constants/constants'

const tiers = [{ id: 1, tier: "Silver" }, { id: 2, tier: "Golden" }, { id: 3, tier: "Bronze" }, { id: 4, tier: "Platinum" }]

const types = [{ id: 1, type: "Live" }, { id: 2, type: "Recorded" }]

export const toEnDigit = value => {
  let result = value
  for (let i = 0; i < 10; i += 1) {
    result = result
      .toString()
      .replace(persianNumbersFinder[i], englishNumbers[i])
      .replace(arabicNumbersFinder[i], englishNumbers[i])
  }
  return result
}

export const toFaDigit = value => {
  let result = value
  for (let i = 0; i < 10; i += 1) {
    result = result
      .toString()
      .replace(englishNumbersFinder[i], englishNumbersFinder[i])
      .replace(arabicNumbersFinder[i], englishNumbersFinder[i])
  }
  return result
}

export const toArDigit = value => {
  let result = value
  for (let i = 0; i < 10; i += 1) {
    result = result
      .toString()
      .replace(englishNumbersFinder[i], englishNumbersFinder[i])
      .replace(persianNumbersFinder[i], englishNumbersFinder[i])
  }
  return result
}

export const getWebinarTiers = () => tiers
export const getWebinarTier = (id) => tiers.find(tier => tier.id === parseInt(id, 10)).tier

export const getWebinarTypes = () => types
export const getWebinarType = (id) => types.find(type => type.id === parseInt(id, 10)).type

// export const getWebinarCategoryLists = () => webcats
// export const getWebinarCategoryList = (id) => webcats.find(webcat => webcat.id === parseInt(id, 10)).webcat