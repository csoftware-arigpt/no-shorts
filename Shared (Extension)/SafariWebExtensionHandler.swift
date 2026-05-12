import SafariServices

class SafariWebExtensionHandler: NSObject, NSExtensionRequestHandling {

    func beginRequest(with context: NSExtensionContext) {
        let response = NSExtensionItem()
        if #available(iOS 15.0, macOS 11.0, *) {
            response.userInfo = [ SFExtensionMessageKey: [:] ]
        } else {
            response.userInfo = [ "message": [:] ]
        }

        context.completeRequest(returningItems: [ response ], completionHandler: nil)
    }

}
