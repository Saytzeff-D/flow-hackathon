export const changeGreeting = `
    import HelloWorld from 0xde3de6a3c08d0f66
    
    transaction(newGreeting: String) {
        prepare(acct: AuthAccount) {}

        execute {
            HelloWorld.changeGreeting(newGreeting: newGreeting)
            log("Hey, we changed the greeting!")
        }
    }
`