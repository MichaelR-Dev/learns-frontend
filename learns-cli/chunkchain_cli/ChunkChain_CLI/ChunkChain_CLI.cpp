// ChunkChain_CLI.cpp : This file contains the 'main' function. Program execution begins and ends there.
//

#include <iostream>

#include <iostream>
#include <vector>
#include <string>

struct Server {

    std::string name;
    std::string address;

    bool isOnline;
};

std::vector<Server> servers;

void ListServers() {

    std::cout << "List of Online Servers:" << std::endl;

    for (const Server& server : servers) {
        if (server.isOnline) {
            std::cout << "Name: " << server.name << ", Address: " << server.address << std::endl;
        }
    }

    std::cout << std::endl << "List of Offline Servers:" << std::endl;

    for (const Server& server : servers) {
        if (!server.isOnline) {
            std::cout << "Name: " << server.name << ", Address: " << server.address << std::endl;
        }
    }

    std::cout << std::endl;
}

void CreateServer() {

    Server newServer;

    std::cout << "Enter server name: ";
    std::cin.ignore();
    std::getline(std::cin, newServer.name);
    std::cout << "Enter server address: ";
    std::getline(std::cin, newServer.address);

    newServer.isOnline = true;

    servers.push_back(newServer);
    std::cout << "Server created successfully!" << std::endl << std::endl;
    std::cout << "Press Enter key to continue..." << std::endl << std::endl;
}

void EditServer() {

    std::string serverName;
    std::cout << "Enter the name of the server to edit: ";
    std::cin >> serverName;

    for (Server& server : servers) {
        if (server.name == serverName) {

            std::cout << "Enter the new address for the server: ";
            std::cin >> server.address;
            std::cout << "Server edited successfully!" << std::endl << std::endl;

            return;
        }
    }

    std::cout << "Server not found." << std::endl << std::endl;
}

void ShutdownServer() {
    std::string serverName;
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
}

void DeleteServer() {

    std::string serverName;
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
}

void ClearInputBuffer() {

    std::cin.clear();
    std::cin.ignore(std::numeric_limits<std::streamsize>::max(), '\n');

}

int main() {

    int option;

    do {
        std::cout << "Select an option:" << std::endl << std::endl;
        std::cout << "1. List Online Servers" << std::endl;
        std::cout << "2. Create Server" << std::endl;
        std::cout << "3. Edit Server" << std::endl;
        std::cout << "4. Shutdown Server" << std::endl;
        std::cout << "5. Delete Server" << std::endl;
        std::cout << "6. Exit" << std::endl << std::endl;
        std::cout << "Option: ";
        std::cin >> option;

        switch (option) {
        case 1:
            ListServers();
            break;
        case 2:
            CreateServer();
            break;
        case 3:
            EditServer();
            break;
        case 4:
            ShutdownServer();
            break;
        case 5:
            DeleteServer();
            break;
        case 6:
            std::cout << "Exiting..." << std::endl;
            break;
        default:
            std::cout << "Invalid option. Try again." << std::endl << std::endl;
            break;
        }

        ClearInputBuffer(); // Clear input buffer to prevent multiple words affecting the next cin
    } while (option != 6);

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
