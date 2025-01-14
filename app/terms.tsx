import { ScrollView, View } from "react-native"

import { ThemedText } from "@/components/ThemedText"
import { ThemedView } from "@/components/ThemedView"

export default function Terms() {
  const termsData = [
    {
      title: "Eligibility and Registration",
      content:
        "Users must provide accurate and up-to-date information for registration. The company reserves the right to verify user identity and eligibility at any time.",
    },
    {
      title: "Game Participation and Registration Fees",
      content:
        "To participate in a quiz event, users must pay the designated registration fee set for that specific event. Registration fees are non-refundable unless the event is canceled by the company. Users are solely responsible for ensuring sufficient balance in their wallets to cover the registration fee.",
    },
    {
      title: "Prize Money and Winning Amount",
      content:
        "Prize money will be decided solely by the company and may vary for each event.The minimum withdrawal amount for any winnings is ₹100. Amounts less than ₹100 cannot be withdrawn. Prize money is awarded based on company policy and may vary depending on the size and difficulty of the game.",
    },
    {
      title: "Event Cancellation and Refunds",
      content:
        "In case an event is canceled due to low participation or technical issues, the registration fee will be credited back to the user's wallet. The credited amount from a canceled event can only be used for future events and cannot be withdrawn. The company is not liable for any damages or inconvenience caused by event cancellations.",
    },
    {
      title: "Wallet and Withdrawals",
      content:
        "Users may deposit money into their app wallet to participate in events. Deposited funds or bonus amounts added by the company as promotional offers are non-withdrawable and can only be used to participate in events. Withdrawable funds must meet the minimum threshold of ₹100 and are limited to winnings only. Withdrawals will be processed to the user's linked bank account, subject to verification and processing times.",
    },
    {
      title: "Usage of Bonus Money",
      content:
        "Only 10% of the bonus money can be used in any event. This limit may vary depending upon company policy at any time. Bonus money is intended solely for gameplay and is non-withdrawable.",
    },
    {
      title: "Game Rules and Fair Play",
      content:
        "Users are expected to adhere to the rules of each quiz event as specified. Any cheating, hacking, or unfair means to gain an advantage will result in disqualification, forfeiture of winnings, and possible suspension or ban from the platform. The company reserves the right to monitor gameplay for any suspicious activity.",
    },
    {
      title: "Dispute Resolution",
      content:
        "In the event of any dispute regarding game results, the company's decision will be final and binding. Users may contact support within 48 hours of any disputed outcome; however, the company reserves the right to uphold or alter results based on investigation.",
    },
    {
      title: "Liability and Disclaimer",
      content:
        "The company will not be responsible for any technical issues experienced by users, including, but not limited to, connectivity issues, device malfunctions, or software errors. The company reserves the right to cancel or reschedule any event at its discretion. All participants assume full responsibility for any legal obligations related to prize winnings, including tax liabilities.",
    },
    {
      title: "Account Suspension and Termination",
      content:
        "The company reserves the right to suspend or terminate any account that violates these terms and conditions or is suspected of fraudulent activities. In cases of account termination, any winnings or wallet balance may be forfeited at the company's discretion.",
    },
    {
      title: "Amendments to Terms",
      content:
        "The company reserves the right to amend these terms and conditions at any time without prior notice. Any updates to terms will be posted within the app, and continued use of the app signifies acceptance of the revised terms.",
    },
    {
      title: "Privacy and Data Protection",
      content:
        "The company respects user privacy and adheres to applicable data protection laws. By using the app, users consent to the collection and processing of personal information necessary for account verification, gameplay, and prize disbursement.",
    },
    {
      title: "Promotions and Bonuses",
      content:
        "Any bonus or promotional amount credited to the user's wallet cannot be withdrawn and can only be used for event participation. Promotional offers are at the discretion of the company and may be subject to additional terms and conditions.",
    },
    {
      title: "Compliance with Laws",
      content:
        "Users are responsible for ensuring their participation complies with all applicable laws in their jurisdiction. The company is not liable for any consequences arising from unlawful participation.",
    },
    {
      title: "Contact and Support",
      content:
        "Users may contact support through the app for assistance with technical issues, transaction queries, and general support. Support requests will be handled during regular business hours and may take up to 48 hours for resolution.",
    },
  ]

  return (
    <ThemedView className="flex-1">
      <ScrollView className="px-4 pt-4">
        {termsData.map((term, index) => (
          <View key={index} className="pb-4">
            <ThemedText className="text-lg font-semibold pb-2">{term.title}</ThemedText>
            <ThemedText>{term.content}</ThemedText>
          </View>
        ))}
      </ScrollView>
    </ThemedView>
  )
}
