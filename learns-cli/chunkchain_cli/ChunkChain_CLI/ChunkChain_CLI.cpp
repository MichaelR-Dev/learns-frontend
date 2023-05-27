// ChunkChain_CLI.cpp : This file contains the 'main' function. Program execution begins and ends there.
//

#include <iostream>

#include <iostream>
#include <vector>
#include <string>
#include <chrono>
#include <map>

struct Player {

    //MEMBERS

    const int _playerId; //Unique Constant Players ID

    std::string playerUser; //Players username
    std::string playerIP; //Players IP

    std::chrono::system_clock::time_point lastOnline; //Last time the player was online
    std::chrono::system_clock::time_point firstJoined; //When did player first join server

    bool isBanned; //Is player banned from server?

    //CONSTRUCTOR

    Player(const int& newPlayerId, const std::string& newPlayerUser, const std::string& newPlayerIP)
        : _playerId(newPlayerId), playerUser(newPlayerUser), playerIP(newPlayerIP), isBanned(false)
    {
        firstJoined = std::chrono::system_clock::now();
    }

};

struct Server {

public:

    //MEMBERS

    std::string name; // Name of Server
    std::string host; // Host for ip / domain
    std::string port; // Port it is forwarded on

    std::string version; //Version of server software

    int maxConnections; //Maximum connections
    std::map<int, Player> activeConnections = std::map<int, Player>(); //Active connections

    bool isOnline = false;
    bool isLatest = false;
    bool enforceWhitelist = false;

    //METHODS

    void StartServer() {
        
    };

    void StopServer(bool isKill, bool isRestarting) {

        /*std::string serverName;
        std::cout << "Enter the name of the server to shutdown: ";
        std::cin >> serverName;

        for (Server& server : servers) {
            if (server.name == serverName) {
                server.isOnline = false;
                std::cout << "Server shutdown successfully!" << std::endl << std::endl;
                return;
            }
        }

        std::cout << "Server not found." << std::endl << std::endl;
        std::cout << "Press Enter key to continue..." << std::endl << std::endl;*/

    };

    void KickPlayer(Player player, std::string kickMessage) {

    };

    void BanPlayer() {

    };

    void OpPlayer(Player player) {

    };

    void DeleteServer() {

        /*std::string serverName;
        std::cout << "Enter the name of the server to delete: ";
        std::cin >> serverName;

        for (auto it = servers.begin(); it != servers.end(); ++it) {
            if (it->name == serverName) {

                servers.erase(it);
                std::cout << "Server deleted successfully!" << std::endl << std::endl;
                return;

            }
        }

        std::cout << "Server not found." << std::endl << std::endl;
        std::cout << "Press Enter key to continue..." << std::endl << std::endl;*/

    }

};

// Servers list
std::vector<Server> servers;

void Prompt(const std::string& prompt) {

    std::cout << prompt;

    return;
};

void PromptQuestion(const std::string& prompt, std::string& userInput) {

    std::cout << prompt;
    
    std::getline(std::cin, userInput);

    if (userInput.empty()) {
        return PromptQuestion(prompt, userInput);
    }

    return;
}

void PromptQuestion(const std::string& prompt, int& userInput) {

    std::string strToIntInput;

    std::cout << prompt;

    std::getline(std::cin, strToIntInput);

    if (strToIntInput.empty()) {

        delete &strToIntInput;

        return PromptQuestion(prompt, userInput);
    }

    userInput = std::stoi(strToIntInput);

    return;
}

void PromptQuestion(const std::string& prompt, int& userInput, const int& defaultValue) {

    std::string strToIntInput;

    std::cout << prompt;

    std::getline(std::cin, strToIntInput);

    if (strToIntInput.empty()) {

        delete& strToIntInput;
        userInput = defaultValue;

        return;

    }

    userInput = std::stoi(strToIntInput);

    return;
}

void PromptQuestion(const std::string& prompt, std::string& userInput, std::string& defaultValue) {
    
    std::cout << prompt;

    std::getline(std::cin, userInput);

    if (userInput.empty()) {
        userInput = defaultValue;

        return;
    }

    return;
    
};

void ListServers() {

    Prompt("List of Online Servers: \n");

    for (const Server& server : servers) {
        if (server.isOnline) {
            Prompt("Name: " + server.name + ", Address: " + server.host + ":" + server.port + "\n");
        }
    }

    Prompt("\n" + std::string("List of Offline Servers:") + "\n");

    for (const Server& server : servers) {
        if (!server.isOnline) {
            Prompt("Name: " + server.name + ", Address: " + server.host + ":" + server.port + "\n");
        }
    }

    Prompt("\n");
}

void CreateServer() {

    Server newServer;

    std::cout << std::endl;
    
    PromptQuestion("Enter server name: ", newServer.name);
    PromptQuestion("Enter server hostname: ", newServer.host);
    PromptQuestion("Enter server port: ", newServer.port);
    PromptQuestion("Enter server max connections: ", newServer.maxConnections, 16);

    newServer.isOnline = false;

    servers.push_back(newServer);

    Prompt("\nServer created successfully!");

}

void ManageServer() {

};

void EditServer() {

    std::string serverName;
    std::cout << "Enter the name of the server to edit: ";
    std::getline(std::cin, serverName);

    for (Server& server : servers) {

        if (server.name == serverName && !server.isOnline) {

            std::cout << "Enter the new name for the server: ";
            std::getline(std::cin, server.name);

            std::cout << "Enter the new hostname for the server: ";
            std::getline(std::cin, server.host);

            std::cout << "Enter the new port for the server: ";
            std::getline(std::cin, server.port);

            std::cout << "Server edited successfully!" << std::endl << std::endl;

            return;
        }
        else if(server.name == serverName && server.isOnline) {

            std::cout << "Server is Online and cannot be edited. Shutdown server and try again." << std::endl << std::endl;
            return;
        }

    }

    std::cout << "Server not found." << std::endl << std::endl;

    return;
}

int main() {

    int option;

    do {

        std::cout << "Select an option:" << std::endl << std::endl;

        std::cout << "1. List Online Servers" << std::endl;
        std::cout << "2. Manage Server" << std::endl;
        std::cout << "3. Create Server" << std::endl;
        std::cout << "4. Edit Server Details" << std::endl;
        std::cout << "5. Exit" << std::endl << std::endl;
        
        PromptQuestion("\nOption: \n", option);

        switch (option) {
        case 1:
            ListServers();
            break;
        case 2:
            ManageServer();
            break;
        case 3:
            CreateServer();
            break;
        case 4:
            EditServer();
            break;
        case 5:
            std::cout << "Exiting..." << std::endl;
            break;
        default:
            std::cout << "Invalid option. Try again." << std::endl << std::endl;
            break;
        }

        //ClearInputBuffer(); // Clear input buffer to prevent multiple words affecting the next cin
    } while (option != 5);

    return 0;
}


// Run program: Ctrl + F5 or Debug > Start Without Debugging menu
// Debug program: F5 or Debug > Start Debugging menu

// Tips for Getting Started: 
//   1. Use the Solution Explorer window to add/manage files
//   2. Use the Team Explorer window to connect to source control
//   3. Use the Output window to see build output and other messages
//   4. Use the Error List window to view errors
//   5. Go to Project > Add New Item to create new code files, or Project > Add Existing Item to add existing code files to the project
//   6. In the future, to open this project again, go to File > Open > Project and select the .sln file
