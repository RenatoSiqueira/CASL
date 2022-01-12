import { AbilityBuilder, Ability } from '@casl/ability'

export const AppAbility = Ability

export default function defineRulesFor(roles) {
  const { can, rules } = new AbilityBuilder(AppAbility)
  if (roles.length === 0) {
    return rules
  }
  for (const role of roles) {
    can('read', role)
  }
  return rules
}

export function buildAbilityFor(roles) {
  return new AppAbility(defineRulesFor(roles), {
    detectSubjectType: (object) => object.type,
  })
}
