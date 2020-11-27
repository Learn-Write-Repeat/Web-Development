Here’s the situation: You’ve opened up your laptop, double-clicked on your web browser, typed www.google.com in the address bar and hit the enter key. For us it’s just an enter button let’s see what’s behind.</br>
# Web Browser
A web browser is a program that most people use to view websites on the Internet.
# URL
When you type www.google.com in the address bar, you are essentially providing the browser with the URL for the website you want to visit. URL stands for Uniform Resource Locator; it is essentially an address to the file (resources) that the browser needs to display the web page.</br>
A complete URL looks something like this:
```HTML 
http://www.google.com/index.html
```
* http:// tells the browser that we want to access a page using the Hyper Text Transfer Protocol (HTTP). This is a protocol that browsers use to interact with web pages. Other protocol have other purposes, for example ftp:// (File Transfer Protocol) is a protocol used to transfer files across the Internet. https:// is  the secured version of http://.
* www is a subdomain of holbertonschool.com; this part refers to a specific location (server) inside the domain where resources are located.
* google.com is the domain name; it represents the server where all the data for "google.com" resides.
* /index.html is the path to the file that will be displayed by the browser.</br>
</br>
The communication between computers on a network is built upon many different protocols. A protocol is a set of rules that both parties must follow in order to function. For example, both parties must speak the same language (syntax), include particular information about themselves, and generally act as expected, according to the protocol.

# TCP/IP
The TCP/IP reference model is a layered model developed by the Defense Project Research Agency(ARPA or DARPA) of the United States as a part of their research project in 1960. Initially, it was developed to be used by defense only. But later on, it got widely accepted. The main purpose of this model is to connect two remote machines for the exchange of information. These machines can be operating in different networks or have different architecture.</br>
![TCP layers](https://s3.ap-south-1.amazonaws.com/afteracademy-server-uploads/what-is-the-tcp-ip-model-and-how-it-works-tcp-ip-model-five-layers-195bdaa7116cd850.jpg)
*The key features of the TCP/IP model are as follows:*
1.**Supports flexible architecture**: We can connect two devices with totally different architecture using the TCP/IP model.</br>
2.**End-node verification**: The end-nodes(source and destination) can be verified, and connection can be made for the safe and successful transmission of data.</br>
3.**Dynamic Routing**: The TCP/IP model facilitates the dynamic routing of the data packets through the shortest and safest path. Due to dynamic routing, the path taken by the data packet can not be predicted, and thus it improves data security.</br>
# Physical Layer
The Physical Layer is the lowest layer of the TCP/IP model. It deals with data in the form of bits. This layer mainly handles the host to host communication in the network. It defines the transmission medium and mode of communication between two devices. The medium can be wired or wireless, and the mode can be simplex, half-duplex, or full-duplex.</br> It also specifies the line configuration(point-to-point or multiport), data rate(number of bits sent each second), and topology in the network. There are no specific protocols that are used in this layer. The functionality of the physical layer varies from network-to-network.
</br>
# Data Link Layer
The Data-Link Layer is the second layer of the TCP/IP layer. It deals with data in the form of data frames. It mainly performs the data framing in which, it adds some header information to the data packets for the successful delivery of data packets to correct destinations. For this, it performs physical addressing of the data packets by adding the source and the destination address to it.
</br>
The data-link layer facilitates the delivery of frames within the same network. It also facilitates the flow and error control of the data frames. The flow of the data can be controlled through the data rate. Also, the errors in the data transmission and faulty data frames can be detected and retransmitted using the checksum bits in the header information.
</br>
# Internet Layer
The Internet layer of the TCP/IP model is approximately the same as the Network layer of the OSI model. It deals with data in the form of datagrams or data packets. This layer mainly performs the logical addressing of the data packets by adding the IP(Internet Protocol) address to it. The IP addressing can be done either by using the Internet Protocol Version 4(IPv4) or Internet Protocol Version 6(IPv6).</br>
The Internet layer also performs routing of data packets using the IP addresses. The data packets can be sent from one network to another using the routers in this layer. This layer also performs the sequencing of the data packets at the receiver’s end. In other words, it defines the various protocols for logical transmission of data within the same or different network. The protocols that are used in the Internet layer are IP(Internet Protocol), ICMP(Internet Control Message Protocol), IGMP(Internet Group Management Protocol), ARP(Address Resolution Protocol), RARP(Reverse Address Resolution Protocol), etc.
# Transport Layer
The Transport layer is the fourth layer of the TCP/IP model. It deals with data in the form of data segments. It mainly performs segmentation of the data received from the upper layers. It is responsible for transporting data and setting up communication between the application layer and the lower layers. This layer facilitates the end-to-end communication and error-free delivery of the data. It also facilitates flow control by specifying data rates. The transport layer is used for process-to-process communication with the help of the port number of the source and the destination.</br>
*The Transport layer facilitates the congestion control using the following protocols:*</br>
TCP: TCP stands for Transmission Control Protocol. It is a connection-oriented protocol. It performs sequencing and segmentation of data. It also performs flow and error control in data transmission. There is an acknowledgement feature in TCP for the received data. It is a slow but reliable protocol. It is suitable for important and non-real time data items.</br>
UDP: UDP stands for User Datagram Protocol. It is a connection-less protocol. It does not perform flow and error control in data transmission. There is no acknowledgement feature in UDP for the received data. It is a fast but unreliable protocol. It is suitable for real-time data items.
# Application Layer
The Application layer provides an interface between the network services and the application programs. It mainly provides services to the end-users to work over the network. For Example, file transfer, web browsing, etc. This layer uses all the higher-level protocols like HTTP, HTTPS, FTP, NFS, DHCP, FMTP, SNMP, SMTP, Telnet, etc.</br>
The application layer helps in setting up and managing the network connections. It also checks for the user’s program authentication and authorization for the data. It also performs some complex operations like data translation, encryption and decryption, and data compression. The application layer synchronizes the data at the sender’s and the receiver’s end. In other words, it is the topmost layer and defines the interface for application programs with transport layer services.</br>
This is all about the TCP/IP model and now we will move to the DNS.
# DNS(Domain Name System)
The Domain Name System (DNS) is the phonebook of the Internet. Humans access information online through domain names, like holbertonschool.com Web browsers interact through Internet Protocol (IP) addresses. DNS translates domain names to IP addresses so browsers can load Internet resources.</br>
Each device connected to the Internet has a unique IP address which other machines use to find the device. DNS servers eliminate the need for humans to memorize IP addresses such as 54.88.73.204 (in IPv4), or more complex newer alphanumeric IP addresses such as 2400:cb00:2048:1::c692:d7a2 (inIPv6).</br>
![DevIncept logo image](https://www.cloudflare.com/img/learning/dns/what-is-dns/dns-lookup-diagram.png)
*There are 4 DNS servers involved in loading a webpage:*</br>
* DNS recursor - The recursor can be thought of as a librarian who is asked to go find a particular book somewhere in a library. The DNS recursor is a server designed to receive queries from client machines through applications such as web browsers. Typically the recursor is then responsible for making additional requests in order to satisfy the client’s DNS query.
* Root nameserver - The root server is the first step in translating (resolving) human readable host names into IP addresses. It can be thought of like an index in a library that points to different racks of books - typically it serves as a reference to other more specific locations.
* TLD nameserver - The top level domain server (TLD) can be thought of as a specific rack of books in a library. This nameserver is the next step in the search for a specific IP address, and it hosts the last portion of a hostname (In example.com, the TLD server is “com”).
* Authoritative nameserver - This final nameserver can be thought of as a dictionary on a rack of books, in which a specific name can be translated into its definition. The authoritative nameserver is the last stop in the nameserver query. If the authoritative name server has access to the requested record, it will return the IP address for the requested hostname back to the DNS Recursor (the librarian) that made the initial request.</br>
**Steps in DNS :**</br>
1.A user types ‘example.com’ into a web browser and the query travels into the Internet and is received by a DNS recursive resolver.</br>
2.The resolver then queries a DNS root nameserver (.).</br>
3.The root server then responds to the resolver with the address of a Top Level Domain (TLD) DNS server (such as .com or .net), which stores the information for its domains. When searching for example.com, our request is pointed toward the .com TLD.</br>
4.The resolver then makes a request to the .com TLD.</br>
5.The TLD server then responds with the IP address of the domain’s nameserver, example.com.</br>
6.Lastly, the recursive resolver sends a query to the domain’s nameserver.</br>
7.The IP address for example.com is then returned to the resolver from the nameserver.</br>
8.The DNS resolver then responds to the web browser with the IP address of the domain requested initially.</br>
